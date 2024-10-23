const Product = require('../models/productModel')
const { productSchema } = require('../models/validations/productValidation')


// Create a product
exports.createProduct = async (req, res) => {
    try {
        const { error } = productSchema.validate(req.body);
        if (error) return res.status(400).send(error.details[0].message);
        const { name, description, price, variants } = req.body;
        const newProduct = await Product.create({ name, description, price, variants });
        res.status(201).json(newProduct);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
// Get a specific product
exports.getProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all products
exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a product
exports.updateProduct = async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedProduct) return res.status(404).json({ message: 'Product not found' });
        res.json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a product
exports.deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndRemove(req.params.id);
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.json({ message: 'Product removed' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Search for products
exports.searchProducts = async (req, res) => {
    try {
        const { q } = req.query;
        const products = await Product.find({
            $or: [
                { name: new RegExp(q, 'i') },
                { description: new RegExp(q, 'i') },
                { 'variants.name': new RegExp(q, 'i') }
            ]
        });
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};