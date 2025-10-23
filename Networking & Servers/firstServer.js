const http = require('http')

const server = http.createServer((req, res) => {
  console.log(req);
});

port = 3001;
server.listen(port, () =>{
  console.log(`Server is listining on port=${port}`)
});