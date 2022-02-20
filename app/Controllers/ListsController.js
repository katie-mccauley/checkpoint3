import { ProxyState } from "../AppState.js";
import { listsService } from "../Services/ListsService.js";
import { loadState, saveState } from "../Utils/LocalStorage.js";
import { Pop } from "../Utils/Pop.js";

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
    ProxyState.on("lists", saveState)
    ProxyState.on("tasks", saveState)

    loadState()
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
    form.reset()
    listsService.createTask(rawTask)

  }

  async deleteList(id) {
    if (await Pop.confirm()) {
      listsService.deleteList(id)
    }

  }


}