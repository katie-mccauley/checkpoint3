import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"

export class Task {
  constructor(data) {
    this.id = generateId()
    this.toDo = data.toDo
    this.listId = data.listId
  }

  get taskTemplate() {
    return `
    <div class="form-check col-12">
      <input class="form-check-input" type="checkbox" value="" id="toDoTask">
      <label class="form-check-label" for="flexCheckDefault">
        ${this.toDo}
      </label>
      <i class="mdi mdi-delete selectable" title="delete task" onclick="app.tasksController.deleteTask('${this.id}')"></i>
    </div>
    `
  }


}