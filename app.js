const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const Product = require('./models/product.model')

//Setup MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/CRUD-API')
    .then(() => {
        console.log(' Connected to Database');
    })
    .catch(() => {
        console.error('Connection Failed!')
    })

//Middleswares
app.use(express.json())

//Routes
app.get('/', (req, res) => {
    res.send('APP is running on the Server')
});


app.get('/api/products', async (req, res) => {
    try {
        const product = await Product.create(req.body)
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
//Starting Server
app.listen(port, () => {
    console.log(`App is running on http://localhost:${port}`);
});