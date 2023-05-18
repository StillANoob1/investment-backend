const express = require("express");
const mongoose = require("mongoose");
const port = process.env.PORT || 8000;
const dotenv = require("dotenv")
const cors =require("cors")
const userRoutes = require("./routes/userRoutes")
dotenv.config();


const app = express();

app.use(cors({ origin:true , credentials:true }));
app.use(express.json());
app.use(userRoutes)

const connect=()=>{
    mongoose.connect(process.env.MONGO_DB).then(()=>{
        console.log("database connected");
    }).catch((err)=>{
        console.log(err);
    })
}

app.listen(port,()=>{
    connect();
    console.log(`port is listining at port ${port}`);
})