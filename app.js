import express from  'express';
import mongoose from 'mongoose';
import cors from "cors";
import router from './routes/cartRouter.js';
const app  = express();

app.use(express.json());

app.use(cors());

app.get("/", (req,res) =>{
    res.send("Helloo..");
})

app.use("/api", router);

const DB = "mongodb+srv://dahamnihci:exoJx6fWSBSGVJsU@cluster0.0l1pwvu.mongodb.net/E-commerce-Website?retryWrites=true&w=majority&appName=Cluster0";
mongoose
  .connect(DB)
  .then(() => {
    console.log("DB connection successful...");
  })
  .catch((error) => {
    console.log(error);
  });


app.listen(5000, () => {
    console.log("App is listening on port 5000!");
  });