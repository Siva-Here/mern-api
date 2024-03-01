const mongoose=require('mongoose')
mongoose.connect("mongodb://localhost:27017/students-api").then(()=>{
    console.log("mongodb connected succesfully")
}).catch((err)=>{
    console.log("Mongodb not connected...")
})
