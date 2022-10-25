import { TodoItem } from "./todoItem";

export class TodoCollection {
  private nextId: number = 1;

  private itemMap = new Map<number, TodoItem>();

  constructor(public userName: string, public todoItems: TodoItem[] = []) {
    todoItems.forEach((item) => this.itemMap.set(item.id, item));
  }

  addTodo(task: string) {
    while (this.getTodoById(this.nextId)) {
      this.nextId++;
    }
    this.todoItems.push(new TodoItem(this.nextId, task));

    this.itemMap.set(this.nextId, new TodoItem(this.nextId, task));
    return this.nextId;
  }

  getTodoById(id: number) {
    return this.todoItems.find((x) => x.id == id);
  }

  markComplete(id: number, completed: boolean) {
    const todoItem: TodoItem = this.getTodoById(id);
    if (todoItem) {
      todoItem.completed = completed;
    }
  }
}
