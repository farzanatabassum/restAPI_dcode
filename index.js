const fs= require('fs/promises')
const express=require('express')
const cors=require('cors')
const _=require('lodash')
const {v4:uuid}=require('uuid')
const app=express()
const port=process.env.PORT||3000
const outfitRoute=require('./routes/Outfit')
const outfitsRoute=require('./routes/Outfits')
app.use("/outfit",outfitRoute);
app.use("/outfits",outfitsRoute);
app.listen(port,()=>console.log('API server is running'))


//comments
app.use(express.json())
app.get('/comments/:id', async(req,res)=>{
    const id=req.params.id;
    // console.log(id)
    //read the file
    let content;
    try{
        content=await fs.readFile(`data/comments/${id}.txt`,"utf-8")
    }
    catch(err){
        return res.sendStatus(404)

    }
    res.json({
        content:content
    })
    console.log(content)

})
app.post('/comments',async(req,res)=>{
    //uuid generates unique id for each comment
    const id=uuid();
    // console.log(id)
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
     await fs.writeFile(`data/comments/${id}.txt`,content)
    res.status(201).json({
        id:id
    })
})