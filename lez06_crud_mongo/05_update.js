const mongoose = require('mongoose');
const StudenteModel = require('./models/Student')

mongoose.connect('mongodb+srv://utente_node:Academy@its2324.s5lb8.mongodb.net/scuola', 
    {useNewUrlParse: true})

let filt = {
    _id: "6708f9a607601d0e70024b20"
}

let daMod = {
    nome: "Mariolino",
    cognome: "Rossucci"
}

StudenteModel.updateOne(filt, daMod, (err, ris) => {
    if(err)
        console.log(err)
    else
        console.log(ris)
})