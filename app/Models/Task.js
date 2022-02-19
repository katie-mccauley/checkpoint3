import { generateId } from "../Utils/generateId.js"

export class Task {
  constructor(data) {
    this.id = generateId()
    this.toDo = data.toDo
    this.listId = data.listId
  }

  get taskTemplate() {
    return `
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
      <label class="form-check-label" for="flexCheckDefault">
        ${this.toDo}
      </label>
    </div>
    `
  }
}