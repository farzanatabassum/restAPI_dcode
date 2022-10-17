// const fs= require('fs/promises')
const express=require('express')
const cors=require('cors')
// const _=require('lodash')
// const {v4:uuid}=require('uuid')
const app=express()
const port=process.env.PORT||3000
const outfitRoute=require('./routes/Outfit')
const outfitsRoute=require('./routes/Outfits')
const commentsRoute=require('./routes/Comments')
app.use("/outfit",outfitRoute);
app.use("/outfits",outfitsRoute);
app.use("/comments",commentsRoute);
app.listen(port,()=>console.log('API server is running'))


