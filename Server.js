const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

app.get("/api/message", function(request, response){
    response.json({
        message: 'Welcome to the world of Node.JS'
    })
})

app.get("/api/student", function(request, response){
    response.json({
        "students": [
            {id: 1, name: 'uma'},
            {id: 2, name: 'gowtham'},
            {id: 3, name: 'madhu'},
            {id: 4, name: 'alam'},
        ]
    })
})

const PORT = 1234

app.listen(PORT, function(){
    console.log(`Server is listening at ${PORT}`)
})
