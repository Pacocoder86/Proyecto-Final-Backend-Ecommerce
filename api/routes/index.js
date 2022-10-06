import userRoutes from './userRoutes.js'
import productsRoutes from './productsRoutes.js'
import salesRoutes from './salesRoutes.js'
import authRoutes from './authRoutes.js'
import cartRoutes from './cartRoutes.js'
import express from 'express'
import { authValidator } from '../middlewares/index.js'

const protectedRoutes = express.Router();

protectedRoutes.use('/users', authValidator, userRoutes)
protectedRoutes.use('/products', authValidator, productsRoutes)
protectedRoutes.use('/sales', authValidator, salesRoutes)
protectedRoutes.use('/carts', authValidator, cartRoutes)


export { protectedRoutes, authRoutes }