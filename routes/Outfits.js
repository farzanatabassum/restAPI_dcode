const express=require('express')
const _=require('lodash')
const router=express.Router();
router.get("/",(req,res)=>{
    const tops=['Orange','Blue','White','Yellow'];
    const jeans=['Black','Navy','Red']
    const shirts=['Green','Gray','Scarlet']
    res.json({
        top:_.sample(tops),
        jean:_.sample(jeans),
        shirt:_.sample(shirts)
    })

})
module.exports=router;