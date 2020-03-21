const configs = require('./configs')
const NODE_ENV = process.env.NODE_ENV || 'dev'
const postfix = NODE_ENV.charAt(0).toUpperCase() + NODE_ENV.slice(1)
const mode = 'umd' + postfix

const { input, output } = configs[mode]

module.exports = Object.assign({}, input, { output })