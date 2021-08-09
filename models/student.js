const mongoose = require('mongoose');

const studentSchema =  mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    city: {
        type: String
    }
})

const Student = module.exports = mongoose.model('Student', studentSchema, 'Student')


module.exports.getStudents = function(callback){
     Student.find(callback)
}

module.exports.getStudentById = function(id, callback){
    Student.findById({_id: id}, callback)
}

module.exports.createStudent = function(data, callback){
    Student.create(data, callback)
}

module.exports.updateStudent = function(id, data, callback){
    Student.update({_id: id}, data, callback)
}

module.exports.deleteStudent = function(id, callback){
    Student.remove({_id: id}, callback)
}