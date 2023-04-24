const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cart');


// Cart Routes
router.get('/', cartController.getAllCarts);
router.post('/', cartController.createCart);
router.get('/:id', cartController.getCartById);
router.put('/:id', cartController.updateCartById);
router.delete('/:id', cartController.deleteCartById);

module.exports = router;
