"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const List_1 = __importDefault(require("../src/List"));
let listNumbers;
test('Node created empty', () => {
    listNumbers = new List_1.default();
    expect(listNumbers.print()).toBe('List is empty');
});
test('Node incrementing', () => {
    listNumbers.append(220);
    listNumbers.append(10);
    expect(listNumbers.print()).toBe('This list of NUMBERS size is 2');
});
test('Node created with value', () => {
    let listNumbers2 = new List_1.default(30);
    expect(listNumbers2.print()).toBe('This list of NUMBERS size is 1');
});
