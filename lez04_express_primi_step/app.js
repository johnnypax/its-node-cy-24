



const express = require('express');

const host = "127.0.0.1";
const port = 4000; 

const app = new express();

app.get("/", (req, res) => {
    res.end("Sono la home");
})

app.get("/chisiamo", (req, res) => {
    res.end("Sono la chisiamo");
})

app.get("/rispostajson", (req, res) => {
    let persona = {
        nome: "Giovanni",
        cognome: "Pace",
        matricola: "AB1234"
    }

    res.json(persona);
})

app.post("/rispostajson", (req, res) => {
    let persona = {
        nome: "Valeria",
        cognome: "Verdi",
        matricola: "AB1235"
    }

    res.json(persona);
})

app.listen(port, host, () => {
    console.log(`Sono connesso all'indirizzo http://${host}:${port}`);
})