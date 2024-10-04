from flask import Flask, request
import json
from config import db
from flask_cors import CORS

app=Flask(__name__)
CORS(app) #warning, this disables CORS policy

@app.get("/")
def home():
    return "Hello from Flask"

@app.get("/about")
def about():
    me={"me":"Juan Montiel Herrera"}
    return json.dumps(me)

@app.get("/footer")
def footer():
    pageName={"pageName":"Organika"}
    return json.dumps(pageName)
    
# create an API to footer that contains the name of the page (organika)

products=[]

def fix_id(obj):
    obj["_id"]=str(obj["_id"])
    return obj

@app.get("/api/products")
def read_products():
    cursor= db.catalog.find({})
    catalog=[]
    for prod in cursor:
        catalog.append(fix_id(prod))

    return json.dumps(catalog)

@app.post("/api/products")
def save_products():
    item=request.get_json()
    db.catalog.insert_one(item)
    return json.dumps(fix_id(item))

@app.get("/api/coupons")
def get_coupons():
    cursor=db.coupon.find({})
    coupons=[]
    for cp in cursor:
        coupons.append(fix_id(cp))

    return json.dumps(coupons)

@app.post("/api/coupons")
def save_coupon():
    item=request.get_json()
    db.coupons.insert_one(item)
    return json.dumps(fix_id(item))

@app.put("/api/products/<int:index>")
def update_products(index):
    update_item=request.get_json()
    if 0<=index<len(products):
        products[index]=update_item
        return json.dumps(update_item)
    else:
        return "That index does not exist"



app.run(debug=True)
