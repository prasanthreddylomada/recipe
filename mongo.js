const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://prasanth:123@cluster0.rhvlm1b.mongodb.net/recipe")
.then(()=>{
    console.log("mongodb connected")
})
.catch(()=>{
    console.log("mongodb connection failed")
})

const Ingredientschema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    }
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
        type:[String],
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
    timeneeded:{
        type:String,
        required : true,

    },
})



const User = mongoose.model("user",newSchema)
const Recipe = mongoose.model("recipe",recipeSchema)
const Ingredient = mongoose.model("ingredient",Ingredientschema)
module.exports = { User, Recipe ,Ingredient};