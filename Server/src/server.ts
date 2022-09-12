import express from 'express';

const app=express();

app.get('/users',(req,res)=>{ 
    return res.json([
        {id:1, name:'User1'},
        {id:2, name:'User2'},
        {id:3, name:'User3'},
        {id:3, name:'User3'}

    ])
})

app.listen(3333)