const http = require('http')

const server = http.createServer((req, res) => {
  // console.log(req);
  console.log(req.url ,req.method, req.headers, );
  res.setHeader('Content-Type','text/html');
  res.write('<html>');
  res.write('<head><title>Hello world</title></head>');
  res.write('<body><h1>hello Azhar</h1></body>');
  res.write('</html>');
  res.end();
});

port = 3001;
server.listen(port, () =>{
  console.log(`Server is listining on port=${port}`)
});