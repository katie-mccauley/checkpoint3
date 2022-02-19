import { ProxyState } from "../AppState.js";
import { tasksService } from "../Services/TasksService.js";


export class TasksController {
  // constructor() {
  //   console.log("this is the tasks controller");
  //   ProxyState.on("tasks", _taskDraw)
  //   _taskDraw
  // }

  createTask(listId) {
    window.event.preventDefault()

    const form = window.event.target

    const rawTask = {
      // @ts-ignore
      toDo: form.toDo.value,
      listId
    }
    tasksService.createTask(rawTask)
  }


}