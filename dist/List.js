"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = __importDefault(require("./Node"));
// interface Lista<T> {
//    head?: Node<T>
//    tail?: Node<T>
// }
class List {
    head;
    tail;
    constructor(startingValue) {
        if (startingValue === undefined) {
            return;
        }
        this.tail = this.head = new Node_1.default({ value: startingValue });
    }
    print() {
        let length = 0;
        if (this.head === undefined) {
            console.log('List is empty');
        }
        else {
            let current = this.head;
            length++;
            console.log(current.value); // Make use of only one log / Maybe recursive function
            while (current.next !== undefined) {
                current = current.next;
                length++;
                console.log(current.value);
            }
        }
        console.log(`This list of ${String.prototype.toUpperCase.call(typeof (this.head?.value))}S size is ${length}`);
    }
    getLast() {
        if (this.head === undefined) {
            return this.head;
        }
        else {
            let current = this.head;
            while (current.next !== undefined) {
                current = current.next;
            }
            return current;
        }
    }
    append(value) {
        let newNode = new Node_1.default({ value: value });
        let lastNode = this.getLast();
        if (lastNode === undefined) {
            this.head = this.tail = newNode;
        }
        else {
            this.tail = lastNode.next = newNode;
            this.tail.previous = lastNode;
        }
    }
}
exports.default = List;
// let meuNome = new Node<string>({ value: "Ricardo" })
// console.log(`Oi, ${ JSON.stringify(meuNome) }`); // Oi, {"value":"Ricardo"}
// console.log(`Olá, ${ meuNome.value }`); // Olá, Ricardo
