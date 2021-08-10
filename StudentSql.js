const express = require('express')
const sql = require('mssql')
const cors = require('cors')



const app = express();
const router = express.Router();

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

const dbConfig = {
    user: 'sa',
    password: 'user@123',
    server: 'LAPTOP-GQVH23CD',
    database: 'StudentDB',
    trustServerCertificate: true
}


router.get("/", (request, response)=>{
    response.send('This is default API endpoint')
})

router.get("/student", (request, response)=>{
    sql.connect(dbConfig, (err)=>{
        if (err) {
            throw err
        }             
        //console.log('Connected to database successfully !!!')

        const request = new sql.Request();
        const selectQuery ="Select * FROM Student"

        request.query(selectQuery, (error, data)=>{
            if(error){
                throw error
            }
            response.json(data.recordset)
        })
        
    })   
})

router.get("/student/:id", (req, res)=>{ 
    var studentId = req.params.id
    sql.connect(dbConfig, (err)=>{
        if (err) {
            throw err
        }             
        //console.log('Connected to database successfully !!!')

        const request = new sql.Request();
        const selectQuery =`Select * FROM Student Where Id=${studentId} `

        request.query(selectQuery, (error, data)=>{
            if(error){
                throw error
            }
            res.json(data.recordset)
        })
        
    }) 
 });

router.post("/student", (req, res)=>{

    sql.connect(dbConfig, (err)=>{
        if (err) {
            throw err
        }             
        //console.log('Connected to database successfully !!!')
        var body = req.body
        const request = new sql.Request();
        const insertyQuery = `INSERT INTO Student (name, email, city) values ('${body.name}', '${body.email}', '${body.city}')`

        request.query(insertyQuery, (error, data)=>{
            if(error){
                throw error
            }
            res.json(data)
        })      
    })   
})

router.put("/student/:id", (req, res)=>{

    sql.connect(dbConfig, (err)=>{
        if (err) {
            throw err
        }             
        //console.log('Connected to database successfully !!!')
        var body = req.body
        var studentId = req.params.id
        const request = new sql.Request();
        const updateQuery = `UPDATE Student SET name='${body.name}', email='${body.email}',city='${body.city}' WHERE ID=${studentId}`

        request.query(updateQuery, (error, data)=>{
            if(error){
                throw error
            }
            res.json(data)
        })      
    })   
})

router.delete("/student/:id", (req, res)=>{

    sql.connect(dbConfig, (err)=>{
        if (err) {
            throw err
        }             
        //console.log('Connected to database successfully !!!'
        var studentId = req.params.id
        const request = new sql.Request();
        const deleteQuery = `DELETE FROM Student where ID=${studentId}`

        request.query(deleteQuery, (error, data)=>{
            if(error){
                throw error
            }
            res.json(data)
        })      
    })   
})

app.use("/api",router)

const PORT = 1234

app.listen(PORT, ()=>{
    console.log(`Server is listening at PORT ${PORT}`)
})
