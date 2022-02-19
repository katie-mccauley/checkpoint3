import { ProxyState } from "../AppState.js";
import { listsService } from "../Services/ListsService.js";

function _draw() {
  let template = ""
  ProxyState.lists.forEach(l => template += l.Template)
  document.getElementById("test").innerHTML = template
}
export class ListsController {
  constructor() {
    console.log("this is lists controller");
    ProxyState.on("lists", _draw)
    ProxyState.on("tasks", _draw)
    // _draw()
  }

  createList() {
    window.event.preventDefault()
    const form = window.event.target
    const rawTask = {
      // @ts-ignore
      name: form.name.value,
      // @ts-ignore
      color: form.color.value
    }
    console.log(rawTask);
    listsService.createTask(rawTask)

  }

  deleteList(id) {
    listsService.deleteList(id)
  }


}