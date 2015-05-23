var express = require('express');
var fs   = require('fs');
var path = require('path');

var app = express.createServer(express.logger());

app.use(express.bodyParser());

app.get('/*', function(request, response) {
	console.log("GET RECIEVED");

	var filePath = '.' + request.url;
    if (filePath == './') filePath = './html/index.html';

    console.log(filePath);

    var extension = path.extname(filePath);
    var contentType = 'text/html';
    switch (extension) {
        case '.html': contentType = 'text/html'; break;
        case '.js': contentType = 'text/javascript'; break;
        case '.css': contentType = 'text/css'; break;
    }

    fs.readFile(filePath, function(err, content) {
        if(err){
            contentType = 'text/html';
            var errorFilePath = './html/errorpage.html';
            fs.readFile(errorFilePath, function(err, errorContent){
                response.writeHead(200, {'Content-Type' : contentType});
                response.write(errorContent);
                console.log("GET RESPONDED WITH ERROR PAGE");
                response.end();
            });
        }else{
            response.writeHead(200, {'Content-Type' : contentType});
            response.write(content);
            console.log("GET RESPONDED");
            response.end();
        }
        
    });
});

app.post('/', function(request, response){
    console.log("POST RECIEVED");
    console.log(request.body);
    var data = request.body;
    response.writeHead(200, {'Content-Type' : 'text/plain'});
    response.write("success");
    response.end();
});


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
