const path = require('path')
const version = require('../package.json').version
const banner = `
/**
 * kchart v${version}
 * (c) ${new Date().getFullYear()} kaiyu5609
 * @license MIT
 */
`
const replace = require('rollup-plugin-replace')
const babel = require('rollup-plugin-babel')
const nodeResolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
const postcss = require('rollup-plugin-postcss')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')

/**
 * __dirname: /Volumes/Seagate/workspaces/kata_projects/my-rollup/build
 */
const resolve = _path => path.resolve(__dirname, '../', _path)

const DEFAULT_CSS_DIST = resolve('dist/k-chart.css')

function genConfig(opts) {
    const isCssProd = /min\.css$/.test(opts.file)
    // css是否要进行压缩
    const postcssPlugins = [autoprefixer]
    isCssProd && postcssPlugins.push(cssnano)

    const config = {
        input: {
            input: opts.input,
            plugins: [
                replace({
                    __VERSION__: opts.version || version
                }),
                nodeResolve({
                    moduleDirectory: 'node_modules',
                    preferBuiltins: false
                }),
                commonjs({ extensions: ['.js', '.ts'] }),
                babel({
                    exclude: 'node_modules/**'
                }),
                postcss({
                    extract: opts.css || DEFAULT_CSS_DIST,
                    plugins: postcssPlugins,
                    extensions: ['.css', '.scss']
                })
            ],
            external: ['d3', 'jquery', 'konva', 'moment']
        },
        output: {
            banner: opts.banner || banner,
            file: opts.file,
            format: opts.format,
            name: 'kchart',
            globals: {
                d3: 'd3',
                jquery: 'jQuery',
                konva: 'Konva',
                moment: 'moment'
            }
        }
    }

    if (opts.env) {
        config.input.plugins.unshift(replace({
            'process.env.NODE_ENV': JSON.stringify(opts.env)
        }))
    }

    return config
}


function mapValues(obj, fn) {
    const res = {}
    Object.keys(obj).forEach(key => {
        res[key] = fn(obj[key], key)
    })
    return res
}

/**
 * 生成打包的rollup配置
 * @param {*} obj 
 */
function generator(obj) {
    return mapValues(obj, genConfig)
}
module.exports = generator