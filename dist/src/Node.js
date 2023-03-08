"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Node {
    value;
    previous;
    next;
    constructor({ value }) {
        this.value = value;
    }
}
exports.default = Node;
