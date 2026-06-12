import dotenv from 'dotenv';
import connDB from "./db/index.js";
dotenv.config({
    path:'./env'
})
connDB();
