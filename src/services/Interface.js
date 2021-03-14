const Group = require('../components/Group')

module.exports = function Interface(){
	const DEFAULT_GROUP_SIZE = 1
	const DEFAULT_DIV_GROUPS_VALUE = ''

	const buttonRemoveGroup = document.querySelector('.bt-remove-group')
	const buttonAddGroup = document.querySelector('.bt-add-group')
	const buttonClearAllGroups = document.querySelector('.bt-clear-all-groups')
	const divGroups = document.querySelector('.groups')
	const inputGroupSize = document.querySelector('.ipt-group-size')
	let groupSize = DEFAULT_GROUP_SIZE

	function init(){	
		addEvents()
	}
	
	function addEvents(){
		addGroup(buttonAddGroup)
		changeGroupSize(inputGroupSize)
		removeGroup(buttonRemoveGroup)
		clearAllGroups(buttonClearAllGroups)
	}

	function clearAllGroups(button){
		button.addEventListener('click', ()=> {
			divGroups.innerHTML = DEFAULT_DIV_GROUPS_VALUE
		})
	}

	function changeGroupSize(input){
		input.addEventListener('change', () => {
			groupSize = input.value || DEFAULT_GROUP_SIZE
		})
	}
	
	function addGroup(button){
		button.addEventListener('click', ()=> {

			const order = divGroups.children.length + 1
			const title = `Grupo ${order}`

			divGroups.innerHTML += Group({ 
				title,
				size : groupSize
			})
		})
	}
	
	function removeGroup(button){
		button.addEventListener('click', ()=> {
			divGroups.lastElementChild.remove()
		})
	}

	return {
		init
	}
}