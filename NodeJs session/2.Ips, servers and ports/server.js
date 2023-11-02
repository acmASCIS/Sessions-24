const http = require  ('http');

const server = http.createServer((req,res)=>{
    console.log("request recieved");
});
// browser keeps loading waiting for response 
server.listen(3000, '', ()=>{
    console.log("listening for requests on port 3000");
});