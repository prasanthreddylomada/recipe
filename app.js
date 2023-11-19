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