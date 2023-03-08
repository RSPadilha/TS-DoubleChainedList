"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const List_1 = __importDefault(require("./List"));
// Tests moved to ../dist/tests using Jest.js
let listNumbers = new List_1.default(10);
listNumbers.append(12);
listNumbers.append(5);
listNumbers.append(6);
listNumbers.append(9);
listNumbers.append(42);
listNumbers.print();
let listStrings = new List_1.default(undefined);
listStrings.append('undefined');
listStrings.append('What are you doing?');
listStrings.append('How are you?');
listStrings.append('This is a list of strings');
listStrings.print();
let listBooleans = new List_1.default();
listBooleans.append(true);
listBooleans.append(false);
listBooleans.append(false);
listBooleans.append(true);
console.log(listBooleans.getLast()); // Print the whole node
listBooleans.print();
// TODO
// append <value> ok
// print ok
// insert <index> <value>
// modify <index> <value>
// getValue <index>
// getIndex <value>
// show
// inverted
// equal <index> <index>
// has <value>
// getSize
// remove <index>
// removeLast
// removeFirst
// clear
