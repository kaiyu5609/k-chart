const fs = require('fs')
const path = require('path')
const zlib = require('zlib')
const configs = require('./configs')
const rollup = require('rollup')
const terser = require('terser')

if (!fs.existsSync('dist')) {
    fs.mkdirSync('dist')
}

function build(builds) {
    // console.log(JSON.stringify(builds, null, 2))
    // console.log(builds)

    let built = 0
    const total = builds.length

    const next = () => {
        buildEntry(builds[built]).then(() => {
            built++
            if (built < total) {
                next()
            }
        }).catch(logError)
    }

    next()
}

function buildEntry({ input, output }) {
    const { file, banner } = output

    const isCss = /\.css$/.test(file)
    const isProd = /min\.js$/.test(file)

    return rollup.rollup(input)
        .then(bundle => bundle.generate(output))
        .then(({ output: [{ code, source }] }) => {
            // css的打包
            if (isCss) {
                return source
            }
            // js的打包
            return code
        })
        .then((code) => {
            // css的打包
            if (isCss) {
                return write(file, code)
            }
            // js的打包
            if (isProd) {
                const minified = (banner ? banner + '\n' : '') + terser.minify(code, {
                    toplevel: true,
                    output: {
                        ascii_only: true
                    },
                    compress: {
                        pure_funcs: ['makeMap']
                    }
                }).code
                return write(file, minified, true)
            } else {
                return write(file, code)
            }
        })
}

/**
 * dest: /Volumes/Seagate/workspaces/kata_projects/my-rollup/dist/chart.esm.js
 * process.cwd(): /Volumes/Seagate/workspaces/kata_projects/my-rollup
 * path.relative(process.cwd(), dest): dist/chart.esm.js
 */
function write(dest, code, zip) {
    return new Promise((resolve, reject) => {
        function report(extra) {
            let destFile = path.relative(process.cwd(), dest)
            let codeSize = getSize(code)
            extra = extra || ''

            console.log(blue(destFile) + ' ' + codeSize + ' ' + extra)
            resolve()
        }

        fs.writeFile(dest, code, err => {
            if (err) return reject(err)
            if (zip) {
                zlib.gzip(code, (err, zipped) => {
                    if (err) return reject(err)
                    let extra = '(gzipped: ' + getSize(zipped) + ')'
                    report(extra)
                })
            } else {
                report()
            }
        })
    })
}

function getSize(code) {
    return (code.length / 1024).toFixed(2) + 'kb'
}

function logError(e) {
    console.log(e)
}

function blue(str) {
    return '\x1b[1m\x1b[34m' + str + '\x1b[39m\x1b[22m'
}

module.exports = build