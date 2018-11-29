var http = require('http');
var https = require('https');
var fs = require('fs');
var path = require('path')

const msg = 'Sorry for the inconvenience, but we are performing maintenance at the moment. \n'     
    + 'We will be back online soon.\n'
    + '-- Weku Team';
http.createServer(function (req, res) {
    const time = new Date();
    console.log(`>>> http: received requst: ${req.url}  on ${time}`);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(msg);
}).listen(80);

const sslOptions = {
    key: fs.readFileSync(path.join(__dirname, './server/ssl/weku_io.key')),
    cert: fs.readFileSync(path.join(__dirname, './server/ssl/weku_io.crt'))
};
https.createServer(sslOptions, function (req, res) {
    const time2 = new Date();
    console.log(`>>> https: received requst: ${req.url}  on ${time2}`);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(msg);
}).listen(443);