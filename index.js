import express from "express";
import dotenv from "dotenv";
import { BookingRouter } from "./src/routes/booking.js";
import router from "./src/routes/index.js";

//initiating server
const app=express();

//middlewares
app.use(express.json());

//env configuration
dotenv.config();

//initiating port
const PORT=process.env.PORT||9000;

//routes
app.use("/",router);

app.use("/book",BookingRouter)

//listening to the server
app.listen(PORT,()=>console.log("Server started in Port : "+PORT));