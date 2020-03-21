const configs = require('./configs')
const build = require('./build')
let builds = Object.keys(configs).map(key => configs[key])

build(builds)