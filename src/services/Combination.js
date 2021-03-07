const { com } = require('percom')
const _ = require('lodash')

module.exports = function Combination(){
    
	function combine(groups = [], sequenceSize){
		const totalGroups = groups.length
		const totalNumbersInGroup = groups[0].length
		const combinations = sequenceSize / totalNumbersInGroup

		const numberArray = toNumberArray(totalGroups)
		const groupsCombination = com(numberArray, combinations)
		
		return keysToSequence(groupsCombination, groups)
	}

	function toNumberArray(lastNumber = undefined){
		if(!lastNumber) {
			throw new Error('Número inválido.')
		}
		let keyNumbers = []
		for(let count = 1; count <= lastNumber; count++){
			keyNumbers.push(count)
		}
		return keyNumbers
	}

	function keysToSequence(keys, groups){
		let sequences = []
		keys.forEach(key => {
			const sequence = key.map(number => {
				const value = groups[number - 1]
				if(!value){
					throw new Error('Sequência inválida.')
				}
				return value
			})
			const concatSequence = _.concat(...sequence)
			const sortedConcatSequence = concatSequence.sort((a,b)=> a - b)
			sequences.push(sortedConcatSequence)  
		})
		return sequences
	}

	return {
		combine,
		toNumberArray,
		keysToSequence
	}
}