const productRouter = require('./routes/productRoutes')   
const userRouter = require('./routes/userRoutes')

const express = require('express')
const app = express()

app.use('/users', userRouter);
app.use('*', productRouter);

app.listen(3000, function() {
    console.log('Server is running on port 3000')
});