"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todoItem_1 = require("./todoItem");
const todoCollection_1 = require("./todoCollection");
const todos = [
    new todoItem_1.TodoItem(1, "Todo No 1"),
    new todoItem_1.TodoItem(2, "Todo No 2"),
    new todoItem_1.TodoItem(3, "Todo No 3"),
    new todoItem_1.TodoItem(4, "Todo No 4"),
];
const todoCollection = new todoCollection_1.TodoCollection("Maaz Ahmed", todos);
todoCollection.addTodo("New item added");
todoCollection.addTodo("one more added");
todoCollection.markComplete(3, true);
todoCollection.markComplete(4, true);
// const todoItem = todoCollection.getTodoById(1);
// console.log(JSON.stringify(todoItem));
console.log(todoCollection.userName + "\n", todos);
const newId = todoCollection.addTodo("add new task");
const todoItem = todoCollection.getTodoById(newId);
console.log(todoItem, "=> Items");
todoCollection.addTodo("todoItem");
todoItem.printDetails();
const mp = new Map();
mp.set("name", "Aslam");
mp.set("a", "asd");
console.log(mp.get("name"));
console.log(mp.get("a"));
// todoItem.printDetails();
