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
    <div class="col-md-4 mt-md-2 mt-4">
      <div class="rounded-top shadow" style="background-color:${this.color}">
        <h2 class="text-dark text-center">${this.name} <i class="mdi mdi-delete selectable"  title="delete list" onclick="app.listsController.deleteList('${this.id}')" ></i> </h2>
        <h4 class="text-dark text-center mb-0 pb-2">${this.checked} tasks uncompleted</h4>
      </div>
      <div class="pt-2 bg-light">
        <div class="ps-2 pb-2">
        
         <h5>${this.TasksTemplate}</h5>
        </div>
        <form onsubmit="app.tasksController.createTask('${this.id}')">
          <div class="input-group">
              <input type="text" id="toDo" name="toDo" class="form-control" id="validationDefault03" required minlength="3" maxlength="50" title="Add Task" placeholder="Add Task">
            <div class="input-group-text">
            
              <button class="btn btn-outline-secondary" id="button-addon2" type="submit" ><i class="mdi mdi-plus"></i></button>
            </div>
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

  //   const checkBox = ProxyState.tasks.filter(t => t.listId == this.id)
  //   total += checkBox.length
  //   const totalBox = ProxyState.tasks.filter(tb => tb)
  //   return
  // }

  get checked() {
    const myTasks = ProxyState.tasks.filter(t => t.listId == this.id)
    const totalTask = myTasks.length
    const unfinished = myTasks.filter(t => !t.checked)
    const unfinishedTask = unfinished.length
    return `${unfinishedTask}/${totalTask}`
  }
}