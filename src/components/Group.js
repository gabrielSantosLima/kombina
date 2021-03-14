module.exports = function Group({ title, size }){
	
	function renderNumbers(){
		let inputs = ''
		for(let count = 0; count < size; count++){
			inputs += `
				<input 
					class="form-control ipt-number w-25 text-center m-sm-1 m-1 rounded-pill" 
					max="100"
					type="number"
				>
			`
		}
		return inputs
	}
	
	function render(){
		return `
		<div class="card w-25 group">
			<div class="card-body">
				<div class="card-title">${title}</div>
				<div class="d-flex flex-wrap justify-content-between">
					${renderNumbers()}
				</div>
			</div>
		</div>
		`
	}
	
	return render()
}