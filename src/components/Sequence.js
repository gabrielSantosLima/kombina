module.exports = function Sequence({ sequence = [] }){
	
	function render(){
		return `<div class="card m-2 p-2 sequence">
		${sequence.toString()}
		</div>`
	}

	return render()
}