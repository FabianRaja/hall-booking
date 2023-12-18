import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();
const db=process.env.connectionString;
async function dbConnection(){
    try {
        const client=new MongoClient(db);
        await client.connect();
        console.log("Database connected");
        return client;

    } catch (error) {
        console.log("error connecting database");
    }
}

export const client=await dbConnection();