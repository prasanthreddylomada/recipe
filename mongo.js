const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://prasanth:123@cluster0.rhvlm1b.mongodb.net/recipe")
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
        required:true,
    },
    profileimage:{
        type:String,
        required:false,
    },
})

const recipeSchema = new mongoose.Schema({
    recipename:{
        type:String,
        required:true,
    },
    recipeimage:{
        type:String,
        required:true,
    },
    ingredients:{
        type:[Number],
        required:true,
    },
    process:{
        type:String,
        required:true,
    },
    instructions:{
        type:String,
        required:true,  
    },
    author:{
        type:String,
        required:true,
    },
})



const collection_0 = mongoose.model("user",newSchema)
const collection_1 = mongoose.model("recipe",recipeSchema)
module.exports=collection_0
module.exports=collection_1