const express=require('express')
const app=express()
const studentRouter=require('./routers/StudentRouter')
require('./db/conn');
const PORT=process.env.PORT || 8000;

app.use(express.json())
app.use(studentRouter)

app.listen(PORT,()=>{
    console.log(`Connection setup succesfully at ${PORT}`)
})

// gajala here