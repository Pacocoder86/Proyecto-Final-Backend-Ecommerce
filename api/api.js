import express from 'express'
import { authRoutes, protectedRoutes } from './routes/index.js'


const api = express()
api.use(express.json())


api.get('/status', (_, res) => {
  return res.json({
    msg: 'API Funcionando'
  })
})

api.use(authRoutes);


api.use(protectedRoutes)

// api.use(theaterRoutes)
// api.use(saleRoutes)

export default api
