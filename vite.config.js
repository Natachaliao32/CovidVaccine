const { resolve } = require('path')

export default {
    base: '/CovidVaccine/',
    build: {
        chunkSizeWarningLimit: 700,
        rollupOptions: {
            // external: [
            //     /node_modules/
            // ], 
            input: {
                index: resolve(__dirname, 'index.html'),
                main: resolve(__dirname, 'main.html')
            }
        }
    }
}