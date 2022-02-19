import { ProxyState } from "../AppState.js";
import { List } from "../Models/List.js";

class ListsService {
  createTask(rawList) {
    const list = new List(rawList)
    ProxyState.lists = [...ProxyState.lists, list]

  }

  deleteList(id) {
    ProxyState.lists = ProxyState.lists.filter(t => t.id != id)

  }
  constructor() {
    console.log("this is the lists service");
  }
}

export const listsService = new ListsService()