import List from "./List.js"

// Tests moved to ../dist/tests using Jest.js
let listNumbers = new List<number>(0)
listNumbers.append(12)
listNumbers.append(0)
listNumbers.removeFirst()
listNumbers.append(45)
listNumbers.print()
console.log(listNumbers.getValue(1))
let [nodeA, nodeB] = [0, 2]
console.log(`Is ${listNumbers.getValue(nodeA)} equal to ${listNumbers.getValue(nodeB)}? ${listNumbers.isEqual(nodeA,nodeB)}`);
console.log(`Has 12? ${listNumbers.has(12)}`);



let listStrings = new List<string>(undefined)
listStrings.append('This is a list of strings')
listStrings.append('undefined')
listStrings.print()

let listBooleans = new List<boolean>()
listBooleans.append(true)
listBooleans.append(false)
// console.log(listBooleans.getLast()) // Print the whole node
listBooleans.print()

// TODO
// append <value> ok
// print ok
// getSize ok
// getNode <index> ok
// getValue <index> ok
// equal <index> <index> ok
// has <value> ok
// getIndex <value> ok
// clear ok
// removeFirst ok
// removeLast
// insert <index> <value>
// modify <index> <value>
// inverted
// remove <index>
// deep clear