const express = require("express")
const { User, Recipe ,Ingredient} = require("./mongo");
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.get("/",cors(),(req,res)=>{

})

app.post("/",async(req,res)=>{
    const{username,password} = req.body
    try {
        const check = await User.findOne({username:username})
        console.log("listen succesfull")
        console.log(username)
        console.log(password)
        console.log(check)
        if(check)
        {
            if(check.password === password ) 
            {
                res.json("crctpswd")

            }
            else
            {
                res.json("wrngpswd")
            }
            
        }
        else{
            res.json("notexist")
        }
        
    } catch (error) {
        res.json("notexist")
        console.log(error)

        
    }
})

app.post("/getingredients",async(req,res)=>{
    const documents = await Ingredient.find({});
    // console.log(documents);
    try {
        if(documents)
        {
            res.json(documents);
            
        }
        else
        {
            res.json("data not exist")
        }
        
    } catch (error) {
        console.log(error);
        
    }
        
})

app.post("/sendrecipe",async(req,res)=>{
    const{recipename,selectedIngredients,timeneeded,process,precautions,author} = req.body
    const data = {
        recipename: recipename,
        recipeimage:'https://imgs.search.brave.com/2ymVtaLQRp8rNEaAOjQpJjpvJ2FZu2fOCpdHQv6wheE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1LzUxLzA3LzI1/LzM2MF9GXzU1MTA3/MjU1OF9yRU51eDlm/cWxlYzVHUEJKU2FU/b1Q2OXhqY1lpR3hq/ZS5qcGc',
        ingredients:selectedIngredients,
        process:process,
        instructions:precautions,
        author:author,
        timeneeded:timeneeded,

        
    }
    await Recipe.insertMany(data)
})

app.post("/signup",async(req,res)=>{
    const{username,password} = req.body
    const data = {
        username:username,
        password:password
    }
    try {
        const check = await User.findOne({username:username})
        if(check)
        {
            res.json("exist")
        }
        else{
            await User.insertMany(data)
            res.json("notexist")
            
        }
        
    } catch (error) {
        res.json("notexist")
        console.log(error)  
    }
})

app.post("/ingredient",async(req,res)=>{
    const {name}=req.body
    const data = {
        name:name
    }
    await Ingredient.insertMany(data)
})

app.listen(8000,()=>{
    console.log("port connected");
})