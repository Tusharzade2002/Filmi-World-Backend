import {model ,Schema} from 'mongoose'
 const filmschema =new Schema({
    title:String,
    director:String,
    poster :String,
    releaseYear:Number,
    Category:String,
    rating:Number,
    Language:String
 },{timestamps:true});
 const Film =model ("Film",filmschema);
 export default Film