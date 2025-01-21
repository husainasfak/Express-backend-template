import express, { Request, Response } from 'express'

import cookieParser from 'cookie-parser'
import { globalErrorHandler } from './middlewares/globalErrorHandler'
import { Config } from './config/env'
const app = express()
app.use(express.json())

app.use(cookieParser())

app.get('/', (req: Request, res: Response) => {
    res.json({
        msg: Config.PORT,
    })
})

app.use(globalErrorHandler)

export default app
