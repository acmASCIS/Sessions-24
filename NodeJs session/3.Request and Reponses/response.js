const http = require  ('http');

const server = http.createServer((req,res)=>{
    // 1.3
    //set header content type to plain
    // res.setHeader('Content-Type', 'text/plain');
    // res.write("Hello acm");
    // res.end();


     // 1.4
    //set header content type to plain
    // res.setHeader('Content-Type', 'text/html');

    // res.write("<strong> Hello acm </strong>");
    // res.end();
});
server.listen(3000, 'localhost', ()=>{
    console.log("listening for requests on port 3000");
});