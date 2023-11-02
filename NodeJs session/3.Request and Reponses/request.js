const http = require  ('http');

const server = http.createServer((req,res)=>{
    //1.1 
    //  console.log(req);
    //1.2 Method
    
     console.log(req.url, req.body);
});
server.listen(3000, 'localhost', ()=>{
    console.log("listening for requests on port 3000");
});