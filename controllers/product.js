const Product = require("../models/product.js")

// Get all the products
exports.getAllProducts = async(req, res, next) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        next(error);
    }
};

// Get one product by ID
exports.getProductById = async(req, res, next) => {
    try {
        const id = req.params.id;
        const product = await Product.findOne({'id': id});
        if(!product) return res.status(404).send('Product not found');
        res.json(product);
    } catch (error) {
        next(error)
    }
}