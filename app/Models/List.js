import { ProxyState } from "../AppState.js";
import { generateId } from "../Utils/generateId.js";

export class List {
  constructor(data) {
    this.id = data.id || generateId()
    this.name = data.name
    this.color = data.color
  }

  get Template() {
    return `
    <div class="col-4 ">
      <div style="background-color:${this.color}">
        <h2 class="text-dark text-center">${this.name} <i class="mdi mdi-delete selectable"  title="delete list" onclick="app.listsController.deleteList('${this.id}')" ></i> </h2>
        <h4 class="text-dark text-center"></h4>
      </div>
      <div class="bg-light">
        <div>
          ${this.TasksTemplate}
        </div>
        <form onsubmit="app.tasksController.createTask('${this.id}')">
          <div class="col">
            <input type="text" id="toDo" name="toDo" class="form-control" id="validationDefault03" required minlength="3" maxlength="50">
            <button class="btn btn-outline-secondary" id="button-addon2" type="submit" ><i class="mdi mdi-plus"></i></button>
          </div>
        </form>
      </div>

    </div>
    
    
    `
  }

  get TasksTemplate() {
    let template = ""
    const myTasks = ProxyState.tasks.filter(t => t.listId == this.id)
    myTasks.forEach(t => template += t.taskTemplate)
    return template
  }

  // get check() {
  //   let total = 0
  //   let task = 0
  //   let check = document.getElementById("toDoTask")
  //   const checkBox = ProxyState.tasks.filter(t => t.listId == this.id)
  //   total += checkBox.length
  //   const totalBox = ProxyState.tasks.filter(tb => t)
  //   return task/total
  // }
}