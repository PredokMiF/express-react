// pm2 start ecosystem.config.cjs

module.exports = {
    apps: [{
        name: 'app',
        script: 'dist/server/index.js',
        instances: 1,
        autorestart: true,
        watch: false,
        time: true,

        env: {
            NODE_ENV: 'production',
        },
    }],
}
