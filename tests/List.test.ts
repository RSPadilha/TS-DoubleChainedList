import List from "../src/List.js"

// describe('description', ()=> {
//   it(describe) == test()
// })

let listNumbers: any;
test('Node\'s size created empty is 0', () => {
  listNumbers = new List<number>()
  expect(listNumbers.getSize()).toBe(0)
})

test('Node\'s size incremented by 4, deleted first then last is 2', () => {
  listNumbers.append(0)
  listNumbers.append(0)
  console.log(listNumbers);
  
  listNumbers.removeFirst()
  listNumbers.removeFirst()
  listNumbers.append(45)
  listNumbers.append(45)
  // listNumbers.removeLast()
  expect(listNumbers.getSize()).toBe(2)
})
// fix typo
test('Another node\'s size created with value is 1', () => {
  let listNumbers2 = new List<number>(0)
  expect(listNumbers2.getSize()).toBe(1)
})

// Have to create a mock funtion to test void functions