import firebase_admin
from firebase_admin import credentials, firestore
import pandas as pd;

cred = credentials.Certificate("./ServiceAccountKey.json")
firebase_admin.initialize_app(cred)

db = firestore.client()
file_name = 'testfile.xls'
excel_sheet = pd.read_excel(file_name)

doc_ref = db.collection('newIntanias')
dataToAdd = dict()
for index,row in excel_sheet.iterrows():
    print(row['student-id'], row['phone-no'],\
         row['no'], row['zoom-name'], row['meeting-round'])
    dataToAdd['student-id'] = str(row['student-id'])
    dataToAdd['phone-no'] = str(row['phone-no'])
    dataToAdd['no'] = str(row['no'])
    dataToAdd['zoom-name'] = str(row['zoom-name'])
    dataToAdd['meeting-round'] = int(row['meeting-round'])
    
    doc_ref.document(str(row['student-id'])).set(dataToAdd)

print('added successfully')