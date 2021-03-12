const input = require('../src/services/Input')()

test('Sequência não deve ter números repetidos', ()=> {
	const numbers = [
		[1,2],
		[1,5],
		[7,8]
	]
	expect(() => input.onCombine(numbers, 4, 2))
		.toThrow('A sequência de números não pode conter números repetidos.')
})

test('Deve resultar em erro quando houver quantidades insuficientes de números', ()=> {
	const numbers = [
		[1,2],
		[3,4]
	]
	expect(() => input.onCombine(numbers, 6, 2))
		.toThrow('A sequência de números não possui números suficientes.')
})

test('Sequência não deve ter números faltando', ()=> {
	const numbers = [
		[1],
		[2,5],
		[7]
	]
	expect(() => input.onCombine(numbers, 4, 2))
		.toThrow('Quantidade incorreta de elementos por grupo.')
})