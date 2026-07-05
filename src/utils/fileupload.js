import {v2 as cloudinary} from 'cloudinary'
import fs from 'fs'
cloudinary.config({ 
        cloud_name: process.env.CLODINARY_cloud_name ,
        api_key: process.env.CLODINARY_API_KEY, 
        api_secret: process.env.CLODINARY_API_SECRET 
    });
const uploadfileonCloudinary = async (localfilepath)=>{
    try{
        if(!localfilepath) return null

        //uploading file huhu
        const response = await cloudinary.uploader.upload(localfilepath,{
            resource_type:auto
        })
        console.log("File uploaded successfully",response.url)
        return response

    }catch(error){
        fs.unlinkSync(localfilepath) // removes temp saved local file as file upoad failed 
        return null

    }
}
export {uploadfileonCloudinary}


    
   