import { client } from "../../db.js";

export function getAllRoom(){
    return client.db("Hall").collection("room").find({}).toArray();
}

export function creatingRoom(data){
    return client.db("Hall").collection("room").insertOne(data);
}

