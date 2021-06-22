import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRouter from "./routes/post.js";
import dotenv from "dotenv"

const app = express();
app.use(cors());
dotenv.config();
app.use(express.json());


const CONNECTION_URL =process.env.CONNECTION_URL;
  
mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    app.listen(process.env.PORT || 3001, (req, res) => {
      console.log(`Server runing on port : ${process.env.PORT} `);
    });
  })
  .catch((error) => console.log(error));
app.use("/post", postRouter);
app.get("/",(req,res)=>{
  res.send("Welcome to Memory Cards API")
})
