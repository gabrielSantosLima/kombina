require('bootstrap')
require('bootstrap/dist/css/bootstrap.min.css')
require('./styles.css')

const Kombina = require('./services/Kombina')
const app = Kombina()
app.init()