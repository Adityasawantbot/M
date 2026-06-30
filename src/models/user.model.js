import mongoose , {Schema} from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
const userSchema = new Schema({
    userName:{
        type:String,
        required:true,
        unique:true,
        index:true,
        lowercase:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true
    },
    fullName:{
        type:String,
        required:true,
        index:true,
        trim:true    
    },
    password:{
        type:String,
        required:[true,"password is required"]
    },
    avatar:{
        type:String,
        required:true
    },
    coverImage:{
        type:String
    },
    refreshToken:{
        type:String,
    },
    watchHistory:[
        {
            type:Schema.Types.ObjectId,
            ref:"Video"
        }
    ]
},{timestamps:true});
userSchema.pre("save",async function (){
    if(!this.isModified("password")) return next()
    this.password=bcrypt.hash(this.password,10)
    next()
})

userSchema.methods.isPasswordCorrect = async function (password){
    return await bcrypt.compare(password,this.passwprd)
}
userSchema.methods.generateAccessToken = function(){
    return jwt.sign({
        _id:this._id,
        email:this.email,
        userName:this.userName,
        fullName:this.fullName
    },
     process.env.ACESS_TOKEN_SECRET,
    {
        expiresIn:process.env.ACESS_TOKEN_EXPIRY
    })
}
userSchema.methods.generateRefreshToken=function (){
    return jwt.sign({
        _id:this._id,
        
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
        expiresIn:process.env.REFRESH_TOKEN_EXPIRY
    }
)
}
export const User =mongoose.model("User",userSchema);