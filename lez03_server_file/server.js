const http = require('http');
const fs = require('fs');

const host = '127.0.0.1';
const port = 4000;

const pagHome = fs.readFileSync('pagine/home.html');
const pagChis = fs.readFileSync('pagine/chi_siamo.html');
const pagCont = fs.readFileSync('pagine/contatti.html');

const server = http.createServer( (req, res) => {
    switch(req.url){
        case "/":
            res.end(pagHome)
            break;
        case "/chisiamo":
            res.end(pagChis)
            break;
        case "/contatti":
            res.end(pagCont)
            break;
        default:
            res.end("<h1>Non trovata</h1>")
    }
} )

server.listen(port,host, () => {
    console.log("Il server è in ascolto")
})