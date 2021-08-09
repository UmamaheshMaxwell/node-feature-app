const express = require('express')
const mongoose = require('mongoose');
const Student = require('./models/student')
const cors = require("cors")
const app = express();
const router = express.Router();


app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

mongoose.connect('mongodb://localhost:27017/StudentDB', 
                 {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
    if(err) {
        throw err
    }
    console.log(`Connected to database successfully`)
})

router.get("/", (req, res)=>{
    response.send('This API uses MongoDB to create APIs')
})

router.get("/student", (req, res)=>{ 
    Student.getStudents(function(err, data){
        if(err){
            throw err
        }
        res.json(data)
    })
 });

 router.get("/student/:id", (req, res)=>{ 
    var studentId = req.params.id
    Student.getStudentById(studentId, function(err, data){
        if(err){
            throw err
        }
        res.json(data)
    })
 });

 router.post("/student", (req, res)=>{ 
     var body = req.body

    Student.createStudent(body, function(err, data){
        if(err){
            throw err
        }
        res.json(data)
    })
 });

 router.put("/student/:id", (req, res)=>{ 
    var body = req.body
    var studentId = req.params.id

   Student.updateStudent(studentId, body, function(err, data){
       if(err){
           throw err
       }
       res.json(data)
   })
});

router.delete("/student/:id", (req, res)=>{ 
    var studentId = req.params.id
   Student.deleteStudent(studentId, function(err, data){
       if(err){
           throw err
       }
       res.json(data)
   })
});


app.use("/api",router)

const PORT = 1234

app.listen(PORT, ()=>{
    console.log(`Server is listening at PORT ${PORT}`)
})