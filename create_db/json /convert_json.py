import json

with open('PM10_centraline_daily_ALL.json') as json_file:
    data = json.load(json_file)
    i = 1
    g_data = {}
    for d in data:

        print ('\"'+ str(i) + '\": '+ d['Legnago']+',')
        i=i+1
    

with open('data.txt', 'w') as outfile:
    json.dump(data, outfile)