const { resolve } = require('path')

export default {
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
    },
    base: '/CovidVaccine/'
}