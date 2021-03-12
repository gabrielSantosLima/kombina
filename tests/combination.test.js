const combination = require('../src/services/Combination')()

test('Sequência deve respeitar as regras de repetição e quantidade de elementos', () => {
	const numbers = [
		[1,2],
		[4,5],
		[7,8]
	]
	const combinations = [
		[1,2,4,5],
		[1,2,7,8],
		[4,5,7,8]
	]
	expect(combination.combine(numbers, 4)).toEqual(combinations)
})

test('Sequência deve vir em ordem crescente', () => {
	const numbers = [
		[1,20],
		[4,5],
		[7,8]
	]
	const combinations = [
		[1,4,5,20],
		[1,7,8,20],
		[4,5,7,8]
	]
	expect(combination.combine(numbers, 4)).toEqual(combinations)
})

test('Sequência deve conter a quantidade exata de combinações sem repetição', () => {
	const numbers = [
		[1,2],
		[4,5],
		[7,8]
	]
	expect(combination.combine(numbers, 4).length).toEqual(3)
})


test('Deve apresentar a sequência numérica de 10', ()=> {
	const numberArray = combination.toNumberArray(10)
	expect(numberArray).toEqual([1,2,3,4,5,6,7,8,9,10])
})

test('Deve apresentar erro ao resultar em sequência inválida', ()=> {
	expect(() => combination.toNumberArray()).toThrow('Número inválido.')
})

test('Deve apresentar erro ao resultar em sequência inválida', ()=> {
	const numbers = [[1,2], [3,4], [5,6]] 
	const keys = [[1,2], [2,3], [1,4]]
	expect(() => combination.keysToSequence(keys, numbers)).toThrow('Sequência inválida.')
})

test('Deve apresentar os elementos ordenados com base na chave', ()=> {
	const numbers = [[1,2], [3,4], [5,6]] 
	const keys = [[1,2], [2,3]]
	const sequences = [[1,2, 3,4], [3,4, 5,6]]
	expect(combination.keysToSequence(keys, numbers)).toEqual(sequences)
})

test('Deve apresentar a quantidade exata de combinações possíveis', () => {
	const numbersOfElements = 3
	const combinations = 2
	expect(combination.countCombinations(numbersOfElements, combinations)).toBe(3)
})