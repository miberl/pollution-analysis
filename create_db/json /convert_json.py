import json

with open('PM10_centraline_daily_ALL.json') as json_file:
    data = json.load(json_file)
    i = 1
    g_data = {}
    for d in data:
        val = 0
        giarol = int(d['Giarol'])
        bmilano = int(d['BgoMilano'])
        if (giarol != -1 and bmilano != -1):
            val = int((giarol+bmilano)/2)
        elif giarol !=-1:
            val = giarol
        else:
            val = bmilano
        
        print ('\"'+ str(i) + '\": '+ str(val)+',')
        i=i+1
