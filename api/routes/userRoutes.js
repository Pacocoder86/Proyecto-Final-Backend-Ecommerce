
import express from 'express'
import { userController } from '../controllers/index.js'

const router = express.Router()


router.post('/', userController.createUser)
router.get('/', userController.getAllUsers)
router.delete('/:id', userController.deleteById)
router.put('/:id', userController.updateUserById)

export default router
