import express from 'express'
import dotenv from 'dotenv'
import cors from  'cors'
import mongoose from 'mongoose'

import { getHome , Healthcheck ,GetNotFound} from './Controller/other.js';
import {postFilmsData ,getFilmsData ,getFilmById,DeleteFilmById,UpdateFilmById,UpdateRatingById} from './Controller/Films/Films.js'


const app =express();
app.use(express.json());
dotenv.config();
app.use(cors())
const PORT = process.env.PORT

  const ConnectDB =async()=>{
             const conn = await mongoose.connect(process.env.MONGO_URL);
             if(conn){
                console.log("Mongo DB is connected succesfully");
             }
  }

app.get("/",getHome)
app.get("/health",Healthcheck)
app.post("/films" ,postFilmsData)
app.get("/films",getFilmsData)
app.get("/films/:id",getFilmById)
app.delete("/films/:id" ,DeleteFilmById)
app.put("/films/:id",UpdateFilmById)
app.patch("/films/rating/:id",UpdateRatingById)
app.get("*",GetNotFound)
app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
    ConnectDB();
})