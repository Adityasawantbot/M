import dotenv from 'dotenv';
import connDB from "./db/index.js";
import app from "./app.js"
dotenv.config({
    path:'./env'
})
connDB()
.then(()=>{
    app.listen(process.env.PORT || 8000 ,()=>{
        console.log(`Server is running on Port:${process.env.PORT}`);
    })
})
.catch((error)=>{
    console.log("MongoDB coonection failed:",error);
})
