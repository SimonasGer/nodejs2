const fs = require("fs");
const http = require("http");
const url = require("url");
const calculator = require("./modules/calculator")

const server = http.createServer((req, res) => {
    const {pathname, query} = url.parse(req.url, true);
    calculator(query.math)

    switch(pathname){
        case "/calculator": 
            res.writeHead(200, {"Content-Type":"text/html"});
            res.end(`<h1>${query.math} = ${calculator(query.math)}</h1>`);
            break;
        default:
            res.writeHead(200, {"Content-Type":"text/html"});
            res.end("<h1>Page not found</h1>");
            break;
    }
})
server.listen(8070, "127.0.0.1", () => {
    console.log("Server listening on 8070 port");
}) 
