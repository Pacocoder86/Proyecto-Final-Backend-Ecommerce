import { Router } from 'express'
import { cartController } from '../controllers/index.js'

const router = Router()

router.get('/', cartController.getAllCart)
router.post('/', cartController.createCart)
router.put('/:id', cartController.updateCartById)
router.delete('/:id', cartController.deleteCartById)

export default router