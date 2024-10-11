const express = require('express');
const mongoose = require('mongoose');
const StudenteModel =  require('./models/Student')

//Connessione al DB
mongoose.connect('mongodb+srv://utente_node:Academy@its2324.s5lb8.mongodb.net/scuola', 
    {useNewUrlParse: true}, () => {
        console.log("Sono connesso al DB di Atlas")
    })

const app = express();
const host = "127.0.0.1";
const port = "4000";

app.listen(port, host, () => {
    console.log("Sono in ascolto!")
})

app.get("/", (req, res) => {

    StudenteModel.find({}, (err, risultato) => {
        if(err){
            res.json(
                {
                    status: "ERROR"
                }
            );
            return;
        }
            
        res.json(risultato)
    } )

})

app.get("/:studId", (req, res) => {
    let varId = req.params.studId;

    StudenteModel.findById(varId, (err, risultato) => {
        if(err){
            res.json({status: "ERROR"});
            return;
        }
            
        res.json(risultato)
    } )
})

app.delete("/:studId", (req, res) => {
    let filt = {
        _id: req.params.studId
    }

    StudenteModel.deleteOne(filt, (err, risultato) => {
        if(err){
            res.json({status: "ERROR"});
            return;
        }

        res.json({status: "SUCCESS"});
    } )
})