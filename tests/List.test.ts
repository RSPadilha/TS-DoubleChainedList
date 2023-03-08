import List from '../src/List'

let listNumbers: any;
test('Node created empty', () => {
  listNumbers = new List<number>()
  expect(listNumbers.print()).toBe('List is empty')
})

test('Node incrementing', () => {
  listNumbers.append(220)
  listNumbers.append(10)
  expect(listNumbers.print()).toBe('This list of NUMBERS size is 2')
})

test('Node created with value', () => {
  let listNumbers2 = new List<number>(30)
  expect(listNumbers2.print()).toBe('This list of NUMBERS size is 1')
})