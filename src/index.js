require('bootstrap')
require('bootstrap/dist/css/bootstrap.min.css')
require('bootstrap-icons/font/bootstrap-icons.css')
require('./styles.css')

const Kombina = require('./services/Kombina')
const app = Kombina()
app.init()