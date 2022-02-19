import { ProxyState } from "../AppState.js";
import { Task } from "../Models/Task.js";

class TasksService {
  deleteTask(id) {
    ProxyState.tasks = ProxyState.tasks.filter(t => t.id != id)
  }
  createTask(rawTask) {
    const task = new Task(rawTask)
    ProxyState.tasks = [...ProxyState.tasks, task]
    console.log(ProxyState.tasks)
  }
  constructor() {
    console.log("this is the tasks service");
  }


}

export const tasksService = new TasksService()