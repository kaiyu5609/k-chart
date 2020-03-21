const path = require('path')
/**
 * __dirname: /Volumes/Seagate/workspaces/kata_projects/my-rollup/build
 */
const resolve = _path => path.resolve(__dirname, '../', _path)

const generator = require('./generator')

const configs = {
    // commonjs: {
    //     input: resolve('src/index.ts'),
    //     file: resolve('dist/chart.common.js'),
    //     format: 'cjs'
    // },
    // esm: {
    //     input: resolve('src/index.ts'),
    //     file: resolve('dist/chart.esm.js'),
    //     format: 'es'
    // },
    umdDev: {
        input: resolve('src/index.js'),
        file: resolve('dist/kchart.js'),
        format: 'umd',
        env: 'development',
        css: 'dist/kchart.css'
    },
    umdProd: {
        input: resolve('src/index.js'),
        file: resolve('dist/kchart.min.js'),
        format: 'umd',
        env: 'production',
        css: 'dist/kchart.min.css'
    },
    cssDev: {
        input: resolve('src/index.js'),
        file: resolve('dist/kchart.css'),
        format: 'umd',
        env: 'development',
        css: 'dist/kchart.css'
    },
    cssProd: {
        input: resolve('src/index.js'),
        file: resolve('dist/kchart.min.css'),
        format: 'umd',
        env: 'production',
        css: 'dist/kchart.min.css'
    }
}

module.exports = generator(configs)