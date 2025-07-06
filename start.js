import express from "express";
import indexRouter from "./routes/indexRoute.js";
import userRouter from "./routes/userRoute.js";
import bodyParser from "body-parser";
import session from "express-session";
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
secret:"qwertyuiopasdfghjkl",

}));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.use("/" , indexRouter);
app.use("/user",userRouter);

app.listen(3000,()=>{
    console.log("Server Started....");
});

