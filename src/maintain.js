var http = require('http');
var https = require('https');
var fs = require('fs');
var path = require('path')

const msg = '<br><br> <center> <img src="https://weku.io/images/revision/logo.png" width="10%"  > <H3><center>We are preparing the platform for the market launch, we are performing some serious security and stability upgrades.<br> Please be patient WEKU is working for you.<br>'
    + ''
    + '<br>-- Weku Team';
http.createServer(function (req, res) {
    const time = new Date();
    console.log(`>>> http: received requst: ${req.url}  on ${time}`);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(msg);
}).listen(8082);

const sslOptions = {
    key: fs.readFileSync(path.join(__dirname, './server/ssl/weku_io.key')),
    cert: fs.readFileSync(path.join(__dirname, './server/ssl/weku_io.crt'))
};
