const Group = require('../components/Group')
const SavedSequence = require('../components/SavedSequence')
const Sequence = require('../components/Sequence')

const { onCombine } = require('./Input')()

module.exports = function Interface(){
	const DEFAULT_GROUP_SIZE = 1
	const DEFAULT_SEQUENCE_SIZE = 1
	const DEFAULT_DIV_GROUPS_VALUE = ''
	
	let groupSize = DEFAULT_GROUP_SIZE
	let sequenceSize = DEFAULT_SEQUENCE_SIZE

	const buttonRemoveGroup = getDOMElement('.bt-remove-group')
	const buttonAddGroup = getDOMElement('.bt-add-group')
	const buttonGenerateSequences = getDOMElement('.bt-generate-sequences')
	const buttonClearAllGroups = getDOMElement('.bt-clear-all-groups')
	const divGroups = getDOMElement('.groups')
	const divSavedSequences = getDOMElement('.saved-sequences')
	const inputGroupSize = getDOMElement('.ipt-group-size')
	const inputSequenceSize = getDOMElement('.ipt-sequence-size')
	const textSizeOfGroups = getDOMElement('.size-of-groups')
	const divSequences = getDOMElement('.sequences')

	function init(){	
		addEvents()
		loadSavedSequences()
	}
	
	function getDOMElement(selectors){
		return document.querySelector(selectors)
	}

	function getDOMElements(selectors){
		return document.querySelectorAll(selectors)
	}

	function loadSavedSequences(){
		// loading from local storage
		const savedSequences = [
			{
				createdAt : '21-03-2021',
				time : '12:23',
				sequences : [[1,2], [2,3], [1,3]]
			},
		]

		for(const savedSequence of savedSequences){
			const liSavedSequence = SavedSequence(savedSequence)
			divSavedSequences.innerHTML += liSavedSequence
		}
	}

	function addEvents(){
		onGenerateSequences(buttonGenerateSequences)
		addGroup(buttonAddGroup)
		changeGroupSize(inputGroupSize)
		removeGroup(buttonRemoveGroup)
		clearAllGroups(buttonClearAllGroups)
		setSequenceSize(inputSequenceSize)
	}

	function onGenerateSequences(button){
		button.addEventListener('click', () => {
			// get numbers of groups
			const groups = getDOMElements('.group')
			let numbers = []

			for(const group of groups){
				let groupN = [] 
				const inputs = group.querySelectorAll('input')
				inputs.forEach(input => {
					groupN.push(parseInt(input.value))
				})
				numbers.push(groupN)
			}
			// generate sequences
			const sequences = onCombine(numbers, sequenceSize, groupSize)
			// show result
			for(const sequence of sequences){
				divSequences.innerHTML += Sequence({sequence})
			}
		})
	}

	function setSequenceSize(input){
		input.addEventListener('change', () => {
			sequenceSize = parseInt(input.value)
		})
	}

	function clearAllGroups(button){
		button.addEventListener('click', ()=> {
			divGroups.innerHTML = DEFAULT_DIV_GROUPS_VALUE
			updateSizeOfGroups(textSizeOfGroups, 0)
		})
	}

	function changeGroupSize(input){
		input.addEventListener('change', () => {
			groupSize = parseInt(input.value) || DEFAULT_GROUP_SIZE
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
			updateSizeOfGroups(textSizeOfGroups, order)
		})
	}
	
	function removeGroup(button){
		button.addEventListener('click', ()=> {
			divGroups.lastElementChild.remove()
			updateSizeOfGroups(textSizeOfGroups, divGroups.children.length)
		})
	}

	function updateSizeOfGroups(element, value){
		element.innerText = value
	}

	return {
		init
	}
}