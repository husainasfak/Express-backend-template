import app from './app'
import { Config } from './config/env'
import logger from './config/logger'

const startServer = async () => {
    const PORT = Config.PORT! ?? 5556
    try {
        logger.info('DB Connected')
        app.listen(PORT, () => logger.info(`Listening on port`, { port: PORT }))
    } catch (err: unknown) {
        if (err instanceof Error) {
            logger.error(err.message)
            logger.on('finish', () => {
                process.exit(1)
            })
        }
    }
}

void startServer()
