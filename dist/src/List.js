import Node from "./Node.js";
// interface Lista<T> {
//    head?: Node<T>
//    tail?: Node<T>
// }
export default class List {
    head;
    tail;
    constructor(startingValue) {
        if (startingValue === undefined) {
            return;
        }
        this.tail = this.head = new Node({ value: startingValue });
    }
    print() {
        let current = this.head;
        if (current === undefined) {
            console.log('List is empty');
        }
        while (current) {
            console.log(current.value);
            current = current.next;
        }
        // return `This list of ${String.prototype.toUpperCase.call(typeof(this.head?.value))}S size is ${length}`
    }
    getSize() {
        let current = this.head;
        let length = 0;
        while (current) {
            length++;
            current = current.next;
        }
        return length;
    }
    getLast() {
        return this.tail;
        // let current = this.head
        // while( current?.next !== undefined ) {
        //    current = current.next
        // }
        // return current
    }
    append(value) {
        let newNode = new Node({ value: value });
        let lastNode = this.getLast();
        if (lastNode === undefined) {
            this.head = this.tail = newNode;
        }
        else {
            this.tail = lastNode.next = newNode;
            this.tail.previous = lastNode;
        }
    }
    getNode(index) {
        let current = this.head;
        for (let iterator = 0; iterator < index && current; iterator++) {
            current = current.next;
        }
        return current;
    }
    getValue(index) {
        return this.getNode(index)?.value;
    }
    isEqual(indexA, indexB) {
        return this.getValue(indexA) === this.getValue(indexB);
    }
    has(value) {
        let current = this.head;
        while (current !== undefined) {
            if (current.value === value) {
                return true;
            }
            current = current.next;
        }
        return false;
    }
    getIndex(value) {
        let current = this.head;
        let index = 0;
        while (current) {
            if (current.value === value) {
                return index;
            }
            current = current.next;
            index++;
        }
        return undefined;
    }
    clear() {
        this.head = undefined;
        this.tail = undefined;
    }
    removeFirst() {
        this.head = this.head?.next;
        // this.head = undefined
    }
    removeLast() {
        this.tail = this.tail?.previous;
        // this.tail?.next = undefined
        // let prev = this.tail?.previous
        // if ( prev ) {
        //    prev.next = undefined
        // }
    }
}
// let meuNome = new Node<string>({ value: "Ricardo" })
// console.log(`Oi, ${ JSON.stringify(meuNome) }`) // Oi, {"value":"Ricardo"}
// console.log(`Olá, ${ meuNome.value }`) // Olá, Ricardo
