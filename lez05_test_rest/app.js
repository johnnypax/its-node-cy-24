const express = require('express');

const host = "127.0.0.1";
const port = 4000; 

const app = new express();

let elenco = [
    {
        nome: "Giovanni",
        cognome: "Pace",
        matricola: "AB1234"
    },
    {
        nome: "Valeria",
        cognome: "Verdi",
        matricola: "AB1235"
    },
    {
        nome: "Marika",
        cognome: "Mariko",
        matricola: "AB1236"
    }
]

app.get("/", (req, res) => {
    res.json(elenco);
})

app.get("/:varmatr", (req, res) => {
    let ricerca = req.params.varmatr;

    for(let [idx, item] of elenco.entries()){
        if(item.matricola == ricerca){
            res.json(item);
            return;
        }
    }

    res.json({
        status: "ERROR"
    })

})

app.listen(port, host, () => {
    console.log(`Sono connesso all'indirizzo http://${host}:${port}`);
})