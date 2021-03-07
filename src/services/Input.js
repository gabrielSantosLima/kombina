const _ = require('lodash')
const Combination = require('./Combination')()

module.exports = function Input(){

	function onCombine(groups, combination, groupSize){
		checkGroupSize(groups, groupSize)
		checkCombinationSize(groups, combination)
		checkForRepetition(groups)
		return Combination.combine(groups, combination)
	}

	function checkForRepetition(groups){
		const totalNumbers = _.concat(...groups)
		for(const number of totalNumbers){
			const hasDuplicate = totalNumbers.filter(n => n === number).length > 1
			if(hasDuplicate){
				throw new Error('A sequência de números não pode conter números repetidos.')
			}
		}
	}

	function checkGroupSize(groups, groupSize){
		groups.forEach(group => {
			const hasNotAllowedSize = group.length !== groupSize
			if(hasNotAllowedSize){
				throw new Error('Quantidade incorreta de elementos por grupo.')
			}
		})		
	}
	
	function checkCombinationSize(groups, combination){
		const totalNumbers = _.concat(...groups)
		const hasNotAllowedSize = totalNumbers.length < combination
		if(hasNotAllowedSize){
			throw new Error('A sequência de números não possui números suficientes.')
		}
	}

	return{
		onCombine
	}
}