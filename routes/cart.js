const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cart');


// Cart Routes
router.get('/cart', cartController.getAllCarts);
router.post('/cart', cartController.createCart);
router.get('/cart/:id', cartController.getCartById);
router.put('/cart/:id', cartController.updateCartById);
router.delete('/cart/:id', cartController.deleteCartById);

module.exports = router;
