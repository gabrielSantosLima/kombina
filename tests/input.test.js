test('Deve resultar em 4', ()=>{
    expect(2+2).toBe(4)
})
// test('Sequência não deve ter números repetidos', ()=> {
//     const combination = Combination()
//     const numbers = [
//         [1,2],
//         [1,5],
//         [7,8]
//     ]
//     expect(combination.combine(numbers, 4))
//         .toThrow('A sequência de números não pode conter números repetidos.')
// })

// test('Sequência não deve ter números faltando', ()=> {
//     const combination = Combination()
//     const numbers = [
//         [1],
//         [1,5],
//         [7]
//     ]
//     expect(combination.combine(numbers, 4))
//         .toThrow('Quantidade de elementos incorreta.')
// })