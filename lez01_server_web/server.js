const http = require('http');

const host = '127.0.0.1';
const port = 4000;

const server = http.createServer( (req, res) => {
    console.log(req.url);
    res.end("Ciao, sono la response")
} )

server.listen(port,host, () => {
    console.log("Il server è in ascolto")
})