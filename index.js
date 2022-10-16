const fs= require('fs/promises')
const express=require('express')
const cors=require('cors')
const _=require('lodash')
const {v4:uuid}=require('uuid')
const { writeFile } = require('fs')
const app=express()
const port=process.env.PORT||3000
app.listen(port,()=>console.log('API server is running'))
app.get('/outfit',(req,res)=>{
    res.send("This is working")
})
app.get("/outfits",(req,res)=>{
    const tops=['Orange','Blue','White','Yellow'];
    const jeans=['Black','Navy','Red']
    const shirts=['Green','Gray','Scarlet']
    res.json({
        top:_.sample(tops),
        jean:_.sample(jeans),
        shirt:_.sample(shirts)
    })

})

//comments
app.use(express.json())
app.post('/comments',async(req,res)=>{
    //uuid generates unique id for each comment
    const id=uuid();
    console.log(id)
    const content=req.body.content;
    // const name=req.body.name;
    // console.log(content ,name)
    //validate
    //make sure to use a return statement if you want to exit from a express point early
    if(!content){
        return res.sendStatus(400)
    }
    //save the comments in a text file
    await fs.mkdir('data/comments', {recursive: true})
    //saving in the file the comments with uuid
    await fs.writeFile(`data/comments${id}`,content)
    res.status(201).json({
        id:id
    })
})