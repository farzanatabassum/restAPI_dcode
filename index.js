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
