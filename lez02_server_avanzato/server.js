const http = require('http');

const host = '127.0.0.1';
const port = 4000;

const server = http.createServer( (req, res) => {
    switch(req.url){
        case "/":
            res.end("<h1>Ciao, sono la home</h1>")
            break;
        case "/chisiamo":
            res.end("<h1>Ciao, sono chi siamo</h1>")
            break;
        case "/contatti":
            res.end("<h1>Ciao, sono la contatti</h1>")
            break;
        default:
            res.end("<h1>Non trovata</h1>")
    }
} )

server.listen(port,host, () => {
    console.log("Il server è in ascolto")
})