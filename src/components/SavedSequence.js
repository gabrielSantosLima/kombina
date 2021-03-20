module.exports = function SavedSequence({ createdAt, time}){ // receive sequence
	
	function render(){
		return `
        <li 
            class="list-group-item saved-sequence d-flex align-items-center justify-content-between"
        >
            COMBINACAO-${createdAt}-${time.replace(':', '-')}
            <div>
                <button class="btn btn-primary bt-copy">
                    <i class="bi bi-clipboard"></i>
                </button>
                <button class="btn btn-primary bt-download">
                    Download
                </button>
            </div>
        </li>
        `
	}
	
	return render()
}