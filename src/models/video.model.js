import mongoose ,{Schema} from 'mongoose';
import mongooseAggregatePaginate from 'mongoose-paginate-v2';
const videoSchema=new Schema({
    videoFile:{
        type:String,
        required:true
    },
    thumbnail:{
        type:String,
        required:true
    },
    title:{
        type:String,
        reuired:true
    },
    description:{
        type:String,
    },
    isPublished:{
        type:Boolean,
        default:false
    },
    duration:{
        type:Number,
    },
    views:{
        type:Number,
        default:0
    },
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }
},{timestamps:true});
videoSchema.plugin(mongooseAggregatePaginate);
export const Video=mongoose.model("Video",videoSchema);


