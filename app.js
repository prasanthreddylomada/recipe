const express = require("express")
const { User, Recipe } = require("./mongo");
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
            res.json("notexist")
            await collection.insertMany(data)
        }
        
    } catch (error) {
        res.json("notexist")
        console.log(error)

        
    }
})

app.listen(8000,()=>{
    console.log("port connected");
})