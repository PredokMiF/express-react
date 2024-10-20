// import cors from 'cors'
import express, { Express } from 'express'
// import helmet from 'helmet'

import { requestLogger } from './middleware/requestLogger'
import { initFrontend } from './middleware/frontend'
import { errorHandler } from './middleware/errorHandler'
// import { getCorsOrigin } from '@common/utils/envConfig'
// import { healthCheckRouter } from '@modules/healthCheck/healthCheckRoutes'
// import { apiRouter } from './router'

const server: Express = express()

server.use(express.json())
server.use(express.urlencoded({ extended: true }))

// const corsOrigin = getCorsOrigin()

// Middlewares
// app.use(cors({
//     origin: [corsOrigin],
//     credentials: true,
// }))
// app.use(helmet())

// Request logging
server.use(requestLogger())

await initFrontend(server)

// Routes
// app.use('/health-check', healthCheckRouter)
// server.use('/api', router)

// Error handlers
server.use(errorHandler())

export { server }
