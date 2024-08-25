import express from "express";

const app=express();
app.use(express.json());

const PORT=8000;

app.get("/",(req,res)=>{
    res.status(200).json({message:"Hey bro"}).send()
})

app.listen(PORT,()=>{
    console.log(`server is listen on port ${PORT}`);
    
})





