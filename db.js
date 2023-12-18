//to connect to mongodb atlas
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
//importing and using config for accessing dotenv variable connectionString
dotenv.config();

const db=process.env.connectionString;

async function dbConnection(){
    try {
        //passing the connectionString as db to the MongoClient
        const client=new MongoClient(db);
        //connecting database
        await client.connect();
        console.log("Database connected");
        return client;

    } catch (error) {
        console.log("error connecting database");
    }
}

export const client=await dbConnection();