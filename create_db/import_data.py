import mysql.connector, json, csv, datetime

rilevazioni_stazione = {
    1: 500015821,
    2: 500000116,
    3: 500000120,
    4: 500000134,
    5: 500031115,
    6: 500031115
}

cnx = mysql.connector.connect(
    user="polveri_sottili",
    password="polveri_sottili",
    host="127.0.0.1",
    database="polveri_sottili",
)
cursor = cnx.cursor()

staz_data = open("data/stats.json")
coor_data = open("data/coords.json")
stazioni = json.load(staz_data)
coordinate = json.load(coor_data)


def find_coord(staz):
    for coor in coordinate["coordinate"]:
        if coor["codseqst"] == staz["codseqst"]:
            return coor
    return None


add_stazione = "INSERT INTO stazioni (codseqst, nome, localita, comune, provincia, lat, lon) VALUES (%(codseqst)s, %(nome)s, %(localita)s, %(comune)s, %(provincia)s, %(lat)s, %(lon)s)"
add_rilevazione = "INSERT INTO rilevazioni (codseqst, data, tipoInquinante, valore) VALUES (%s, %s, %s, %s)"

for staz in stazioni["stazioni"]:
    coor = find_coord(staz)
    staz["lat"] = coor["lat"]
    staz["lon"] = coor["lon"]
    cursor.execute(add_stazione, staz)


def addtoDB(file):
    file.readline()
    reader = csv.reader(file)
    for rilevazione in reader:
        tiporilevazione = "PM10"
        data = rilevazione[0]
        data = datetime.datetime.strptime(data,'%d/%m/%Y')
        print (rilevazione)
        for i in range (1, 6):
            if rilevazione[i] == '':
                rilevazione[i] = -1
            ril = (rilevazioni_stazione[i], data, "PM10", rilevazione[i])
            cursor.execute(add_rilevazione, ril)
        if rilevazione[6] == '':
            rilevazione[6] = -1
        ril = (rilevazioni_stazione[6], data, "PM25", rilevazione[6])
        cursor.execute(add_rilevazione, ril)

with open("data/daily_data/PM10_centraline_daily_2019.csv", "r") as file:
    addtoDB(file)

with open("data/daily_data/PM10_centraline_daily_2020.csv", "r") as file:
    addtoDB(file)


cnx.commit()
cursor.close()
cnx.close()