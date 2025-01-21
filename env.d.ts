declare namespace NodeJS {
    interface ProcessEnv {
        NODE_ENV: 'development' | 'production' | 'test'
        TZ?: string
        // Add other environment variables here
    }
}
