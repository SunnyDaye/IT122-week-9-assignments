const http = require('http');
const fs = require('fs');
const PORT = 3000;

const server = http.createServer((req, res)  => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    const page = fs.readFileSync("index.html", "utf-8");

    res.end(page);
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))