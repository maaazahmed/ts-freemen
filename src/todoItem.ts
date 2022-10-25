type bool = true | false;


export class TodoItem {
  public id: number;
  public task: string;
  public completed: bool;

  constructor(id: number, task: string, completed: bool = false) {
    this.id = id;
    this.task = task;
    this.completed = completed;
  };

  public printDetails() {
    console.log(
      `${this.id}\t${this.task} ${this.completed ? "\t(complete)" : ""}`
    );
  };
}

