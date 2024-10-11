const mongoose = require('mongoose');
const StudenteModel = require('./models/Student')

mongoose.connect('mongodb+srv://utente_node:Academy@its2324.s5lb8.mongodb.net/scuola', 
    {useNewUrlParse: true})

let filt = {
    _id: "6708fad31a7dca2ad40f518e"
}

StudenteModel.deleteOne(filt, (err, ris) => {
    if(err)
        console.log(err)
    else
        console.log(ris)
})