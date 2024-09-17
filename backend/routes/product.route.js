import express from 'express';
import mongoose from 'mongoose';

import { createProduct, updateProduct, getProducts, getProduct, deleteProduct } from '../controllers/product.controller.js';

const router = express.Router();

router.post("/", createProduct)

router.put('/:id', updateProduct)

router.get('/', getProducts)

router.get('/:id', getProduct)

router.delete('/:id', deleteProduct)

export default router;