const mongoose = require('mongoose');
const StudenteModel = require('./models/Student')

mongoose.connect('mongodb+srv://utente_node:Academy@its2324.s5lb8.mongodb.net/scuola', 
    {useNewUrlParse: true})

StudenteModel.find({}, (err, ris) => {
    if(err)
        console.log(err)
    else
        console.log(ris)
})