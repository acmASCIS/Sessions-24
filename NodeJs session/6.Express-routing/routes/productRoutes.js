const Router = require('express').Router();

Router.get('/', (req, res) => {
    res.send('Hello from products');
}

);

module.exports = Router;