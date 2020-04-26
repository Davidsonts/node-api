const express = require('express');
const routes = express.Router();
const ProductController = require('./controllers/ProductController');

routes.get('/', (req, res) => {
    // Product.create({
    //     title: 'Google',
    //     description: 'Buscador',
    //     url: 'https://google.com'
    // });
    return res.send('OK');
}); 

routes.get('/products', ProductController.index); 
routes.get('/products/:id', ProductController.show); 
routes.post('/products', ProductController.store); 
routes.put('/products/:id', ProductController.update); 
routes.delete('/products/:id', ProductController.destroy); 

module.exports = routes;