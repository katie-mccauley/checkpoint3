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

  completeTask(id) {
    // const task = ProxyState.tasks.find(t => t.id === id)
    // task.checked = !task.checked
    ProxyState.tasks = ProxyState.tasks.map(t => {
      if (t.id === id) {
        t.checked = !t.checked
      }
      return t
    })
  }
  constructor() {
    console.log("this is the tasks service");
  }


}

export const tasksService = new TasksService()