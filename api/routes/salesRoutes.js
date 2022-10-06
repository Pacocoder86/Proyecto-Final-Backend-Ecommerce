import express from 'express'
import { salesController } from '../controllers/index.js'

const router = express.Router()

router.post('/', salesController.createSale)
router.get('/', salesController.getAllSales)
router.put('/:id', salesController.updateSalesById)
router.delete('/:id', salesController.deleteSalesById)

export default router
