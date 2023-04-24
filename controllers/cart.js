const Cart = require('../models/cart.js');

// Get all the items
exports.getAllCarts = async (req, res, next) => {
    try {
        const carts = await Cart.find();
        res.json(carts);
    } catch (err) {
        next(err);
    }
};

// Create a new Cart item
exports.createCart = async (req, res, next) => {
    try {
        const cart = new Cart({
            username: req.body.username,
            created_at: new Date(),
            updated_at: new Date(),
            items: [{product_id, quantity, price, created_at, updated_at}]
        });
        await cart.save();
        res.json({ cart_id: cart.cart_id });
    } catch (err) {
        next(err);
    }
};

// Get a single cart item
exports.getCartById = async (req, res, next) => {
    try {
        const cart = await Cart.findOne({ cart_id: req.params.id });
        if (!cart) return res.status(404).send('Cart not found');
        res.json(cart);
    } catch (err) {
        next(err);
    }
};

// Update the cart item
exports.updateCartById = async (req, res, next) => {
    try {
        const cart = await Cart.findOne({ cart_id: req.params.id });
        if (!cart) return res.status(404).send('Cart not found');
        if (req.body.username) cart.username = req.body.username;
        if (req.body.items) cart.items = req.body.items;
        cart.updated_at = new Date();

        await cart.save();
        res.json(cart);
    } catch (err) {
        next(err);
    }
};

// Delete the cart item
exports.deleteCartById = async (req, res, next) => {
    try {
        const cart = await Cart.findOne({ cart_id: req.params.id });
        if (!cart) return res.status(404).send('Cart not found');
        await cart.remove();
        res.send(`Cart ${ req.params.id } deleted successfully`);
    } catch (err) {
        next(err);
    }
};