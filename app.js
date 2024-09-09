const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const Product = require('./models/product.model')
const productRoute = require('./routes/product.route')

// Database Connection
const connectDB = require('./db');
connectDB();

//Middleswares
app.use(express.json()) 
app.use(express.urlencoded({extended: false}))
app.use('/api/products', productRoute)

//? R O U T E S

app.get('/', (req, res) => {
    res.send('APP is running on the Server')
});

app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find({})
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})
app.get('/api/product/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

app.post('/api/products', async (req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//* Update API
app.put('/api/product/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);

        if (!product) {
            res.status(404).json({ message: "Product not found" })
        }

        const updatedProduct = await Product.findById(id)
        res.status(200).json(updatedProduct)

    } catch (error) {
        res.status(500).json({ message: error.message })

    }
})


//*Delete API

app.delete('/api/product/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);

        if (!product) {
            res.status(404).json({ message: "Product not found" })
        }

        res.status(200).json({ message: "Product deleted successfully!" })

    } catch (error) {
        res.status(500).json({ message: error.message })

    }
})




//Starting Server
app.listen(port, () => {
    console.log(`App is running on http://localhost:${port}`);
});