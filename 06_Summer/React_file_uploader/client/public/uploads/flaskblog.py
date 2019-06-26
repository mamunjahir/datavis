from flask import Flask
from flask import request
from flask import jsonify, make_response
import sys
import os
import pandas as pd
import numpy as np
import glob
from flask_cors import CORS
# ----------------------------> All imports end here
flag='Test'
app = Flask(__name__)
CORS(app)
@app.route("/json", methods=["POST"])
def json_example():
    if request.is_json:
        req = request.get_json()
        if(req.get("name")=="A"):
            print(dataprocess(), file=sys.stderr)
            print(flag, file=sys.stderr)
        elif(req.get("name")=="B"):
            print("Hello B", file=sys.stderr)
        response_body = {
        "message": "JSON received!",
        "sender": flag
        }
        res = make_response(jsonify(response_body), 200)
        return res
    else:
        return make_response(jsonify({"message": "Request body must be JSON"}), 400)
#----------------------------------------------------------------------------------------> Processing function starts here
def dataprocess():
    global flag;
    typesize=0;
    index=0;
    file = open("01/testfile.csv","w") 
    for filename in glob.glob('*.csv'):
        print(filename);
        # index should be set to zero for each datasets. otherwise index out of bounds error will happen
        index=0;
        data=pd.read_csv(filename);
        file.write(filename +",")
        file.write(str(data.shape[0])+",")
        file.write(str(data.shape[1])+",")
        if data.columns.size>typesize:
            typesize=data.columns.size
        for x in data.columns:
            # x is the column name.(__name__) to remove the class 
            file.write(x+"("+ str(type(data[data.columns[index]][0]).__name__)+"),")
            index=index+1
        file.write("\n")
    file.close()
    print(typesize) 
    #Read the existing text from file in READ mode
    f=open("01/testfile.csv","r")
    fline="Dataset,#Rows,#Columns"    #Prepending string
    for t in range(typesize+1):
            t=t+1
            #print(fline)
            fline=fline+",Column"+str(t)
    fline=fline+"\n"
    oline=f.readlines()
    #Here, we prepend the string we want to on first line
    oline.insert(0,fline)
    f.close()
    #We again open the file in WRITE mode 
    f=open("01/testfile.csv","w")
    f.writelines(oline)
    f.close()
    flag='Succes'
    return "Succes"
#----------------------------------------------------------------------------------------> Processing function ends here
if __name__ == '__main__':
    app.run(host = '192.168.1.102',port='5006')
    

