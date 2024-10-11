const mongoose = require('mongoose');
const StudenteModel = require('./models/Student')

mongoose.connect('mongodb+srv://utente_node:Academy@its2324.s5lb8.mongodb.net/scuola', 
    {useNewUrlParse: true})

let stud = {
    nome: "Mario",
    cognome: "Rossi",
    matricola: "AB1236"
}

StudenteModel.create(stud, (errore, risultato) => {
    if(errore)
        console.log(errore)
    else
        console.log(risultato)
})