// const http = require('http');

// const server = http.createServer((req, res) => {
//   if (req.url === '/') {
//     // Route for the homepage
//     res.setHeader('Content-Type', 'text/plain');
//     res.write('Hello');
//     res.end();
//   } else if (req.url === '/other') {
//     // Route for the other page
//     res.setHeader('Content-Type', 'text/plain');
//     res.write('I am on the other page');
//     res.end();
//   } else {
//     // Route for unknown pages
//     // res.statusCode = 404;
//     res.setHeader('Content-Type', 'text/plain');
//     res.write('Page not found');
//     res.end();
//   }
// });

// server.listen(3000, 'localhost', () => {
//   console.log('Listening for requests on port 3000');
// });