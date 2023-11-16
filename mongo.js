const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/recipe")
.then(()=>{
    console.log("mongodb connected")
})
.catch(()=>{
    console.log("mongodb connection failed")
})

const newSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection = mongoose.model("user",newSchema)
module.exports=collection