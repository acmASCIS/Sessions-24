const Router = require('express').Router();

Router.get('/', (req, res) => {
    res.send('Hello from Users');
} );

module.exports = Router;