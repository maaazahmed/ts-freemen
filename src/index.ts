import { TodoItem } from "./todoItem";
import { TodoCollection } from "./todoCollection";

const todos:TodoItem[] = [
  new TodoItem(1, "Todo No 1"),
  new TodoItem(2, "Todo No 2"),
  new TodoItem(3, "Todo No 3"),
  new TodoItem(4, "Todo No 4"),
];
                                                                        
const todoCollection: TodoCollection = new TodoCollection("Maaz Ahmed", todos);

todoCollection.addTodo("New item added");
todoCollection.addTodo("one more added");

todoCollection.markComplete(3, true);
todoCollection.markComplete(4, true);

// const todoItem = todoCollection.getTodoById(1);
// console.log(JSON.stringify(todoItem));


console.log(todoCollection.userName + "\n", todos);

const newId:number = todoCollection.addTodo("add new task");
const todoItem:TodoItem = todoCollection.getTodoById(newId);

console.log(todoItem, "=> Items");

todoCollection.addTodo("todoItem")
todoItem.printDetails()




// todoItem.printDetails();