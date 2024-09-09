const express = require('express');
const router = express.Router();

const { getProducts, getSingleProduct, createProduct, updateProduct, deleteProduct } = require('../controllers/product.controller');


//READ ALL
router.get('/', getProducts)

//READ BY ID
router.get('/:id', getSingleProduct)

//CREATE API
router.post('/', createProduct)

//UPDATE API
router.put('/:id', updateProduct)


//DELETE API
router.delete('/:id', deleteProduct);

module.exports = router;