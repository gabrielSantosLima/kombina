const { com, countCom } = require('percom')
const { concat, pull } = require('lodash')

module.exports = function Combination(){
    
	function combine(groups = [], sequenceSize){
		const groupsCombination = getGroupsCombinationsKeys(groups, sequenceSize)
		return keysToSequence(groupsCombination, groups)
	}

	function combineWithFixedNumbers(groups = [], fixedNumbers = [], sequenceSize){
		const groupsWithoutFixedNumbers = getGroupsWithoutFixedNumbers(groups, fixedNumbers)
		return getGroupsCombinations(groupsWithoutFixedNumbers, fixedNumbers, sequenceSize)
	}
	
	function getGroupsCombinations(groups, fixedNumbers, sequenceSize){
		const combinations = sequenceSize - fixedNumbers.length 
		const sequences = com(groups, combinations)
		const preparedSequences = sequences.map(prepareSequence)
		return concatWithFixedNumbers(preparedSequences, fixedNumbers)
	}

	function getGroupsCombinationsKeys(groups, sequenceSize){
		const totalGroups = groups.length
		const totalNumbersInGroup = groups[0].length
		const combinations = sequenceSize / totalNumbersInGroup

		const numberArray = toNumberArray(totalGroups)
		const groupsCombination = com(numberArray, combinations)

		return groupsCombination
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
		return getSequences(keys,groups)
	}
	
	function getSequences(keys, groups){
		let sequences = []
		keys.forEach(key => {
			const sequence = key.map(number => {
				const value = groups[number - 1]
				if(!value){
					throw new Error('Sequência inválida.')
				}
				return value
			})
			const preparedSequence = prepareSequence(sequence)
			sequences.push(preparedSequence)  
		})
		return sequences
	}

	function prepareSequence(sequence){
		const concatedSequence = concatSequence(sequence)
		const sortedConcatSequence = sortSequence(concatedSequence)
		return sortedConcatSequence
	}

	function sortSequence(sequence){
		return sequence.sort((a,b) => a-b)
	}

	function concatSequence(sequence){
		return concat(...sequence)
	}

	function getGroupsWithoutFixedNumbers(groups, fixedNumbers){
		const preparedGroups = prepareSequence(groups)
		const groupsWithoutFixedNumbers = pull(preparedGroups, ...fixedNumbers)
		return groupsWithoutFixedNumbers
	}

	function concatWithFixedNumbers(sequences, fixedNumbers){
		return sequences.map(sequence => sortSequence(concat(sequence, fixedNumbers)))
	}

	function countCombinations(numbersOfElements, combinations){
		return countCom(numbersOfElements,combinations)
	}

	return {
		combine,
		getGroupsWithoutFixedNumbers,
		combineWithFixedNumbers,
		toNumberArray,
		keysToSequence,
		countCombinations
	}
}