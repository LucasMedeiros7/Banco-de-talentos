import express from 'express'
import cors from 'cors'
import { productsRoutes } from './routes/products-routes'

const app = express()

app.use(cors())
app.use(express.json())
app.use(productsRoutes)

export { app }
