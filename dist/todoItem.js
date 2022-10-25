"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoItem = void 0;
class TodoItem {
    constructor(id, task, completed = false) {
        this.id = id;
        this.task = task;
        this.completed = completed;
    }
    ;
    printDetails() {
        console.log(`${this.id}\t${this.task} ${this.completed ? "\t(complete)" : ""}`);
    }
    ;
}
exports.TodoItem = TodoItem;
