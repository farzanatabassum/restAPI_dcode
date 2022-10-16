const fs= require('fs/promises')
const express=require('express')
const cors=require('cors')
const _=require('lodash')
const {v4:uuid}=require('uuid')
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
app.post('/comments',(req,res)=>{
    //uuid generates unique id for each comment
    const id=uuid();
    console.log(id)
    res.sendStatus(201)
})