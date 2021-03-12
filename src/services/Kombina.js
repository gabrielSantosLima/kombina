const interface = require('./Interface')()

module.exports = function Kombina(){
	function init(){
		interface.init()
	}
	return{
		init
	}
}