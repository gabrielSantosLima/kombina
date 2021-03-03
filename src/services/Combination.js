const { com } = require('percom')

function Combination(){
    
	function combine(numbers = [], sizeOfSequences){
		const totalNumbers = numbers.length
		const totalNumbersInGroup = numbers[0].length
		const combinations = sizeOfSequences / totalNumbersInGroup

		const numberArray = toNumberArray(totalNumbers)
		const groupsCombination = com(numberArray, combinations)
		return keysToSequence(groupsCombination, numbers)
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

	function keysToSequence(keys, numbers){
		let sequences = []
		keys.forEach(key => {
			const sequence = key.map(n => {
				const number = numbers[n-1]
				if(!number){
					throw new Error('Sequência inválida.')
				}
				return number
			})
			sequences.push(sequence)  
		})
		return sequences
	}

	return {
		combine,
		toNumberArray,
		keysToSequence
	}
}

module.exports = Combination