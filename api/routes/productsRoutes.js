import express from 'express'
import { productsController } from '../controllers/index.js'

const router = express.Router()

router.post('/', productsController.createProduct)
router.get('/', productsController.getAllProducts)
router.put('/:id', productsController.updateProductById)
router.delete('/:id', productsController.deleteProductById)

export default router
