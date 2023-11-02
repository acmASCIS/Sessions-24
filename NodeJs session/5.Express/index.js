const express = require('express')
const app = express()
app.get('*', function(req,res){
  res.status(404).send("not found")
})
app.get('/', function (req, res) {
  res.send('Hello World')
  
})
app.get('/other', function(req,res) {

})




app.listen(3000, function() {
  console.log('Server is running on port 3000')
});