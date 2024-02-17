const fitstexpress=require("express")
const app=fitstexpress()

app.listen(3000,()=>{
    console.log("YES THE SERVER RUNNING");
})

app.get("/api/greetings",(req,res)=>{
    res.json([{
        name:"Lior",
    }])
    
})