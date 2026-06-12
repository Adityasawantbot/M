import mongoose from 'mongoose';
import {DB_NAME} from "../constants.js";

import dns from 'dns';
dns.setServers([
    '1.1.1.1'
]);
const connDB= async ()=>{
    try{
        const connectionInstance = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`\n MongoDb connected * DB HOST ${connectionInstance.connection.host}`)
    }catch(error){
        console.log("MongoDB coonection error:",error);
        process.exit(1);
    };
    
}
export default connDB;