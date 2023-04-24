const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.js');


// Cart Routes
router.get('/product', productController.getAllProducts);
router.get('/product/:id', productController.getProductById);

module.exports = router;
