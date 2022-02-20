import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"

export class Task {
  constructor(data) {
    this.id = generateId()
    this.toDo = data.toDo
    this.listId = data.listId
    this.checked = data.checked
  }

  get taskTemplate() {
    return `
    <div class="form-check col-12">
      <input class="form-check-input" type="checkbox" value="" id="toDoTask" onchange="app.tasksController.completeTask('${this.id}')" ${this.checked ? "checked" : ""}>
      <label class="form-check-label" for="flexCheckDefault">
        ${this.toDo}
      </label>
      <i class="mdi mdi-delete selectable" title="delete task" onclick="app.tasksController.deleteTask('${this.id}')"></i>
    </div>
    `
  }



}