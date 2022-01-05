import { v4 as uuidv4 } from 'uuid';

export default class LocalData {

  getChecklists() {
    let checklists = localStorage.getItem("react-starter-checklists");

    if(checklists) {
      return JSON.parse(checklists)
    }

    checklists = []
    this.save(checklists)
    return checklists
  }

  addChecklist(checklist) {
    checklist.id = uuidv4()
    let checklists = this.getChecklists()
    checklists.push(checklist)
    this.save(checklists)
  }

  updateChecklist(checklist) {
    let checklists = this.getChecklists()

    for( let i = 0; i < checklists.length; i++ ) {

      if(checklist.id === checklists[i].id) {
        checklists[i] = checklist
        this.save(checklists)
        break
      }
    }
  }

  deleteChecklist(checklist) {
    let checklists = this.getChecklists()

    for( let i = 0; i < checklists.length; i++ ) {

      if(checklist.id === checklists[i].id) {
        checklists.splice(i, 1)
        this.save(checklists)
        break
      }
    }
  }

  save(checklists) {
    localStorage.setItem("react-starter-checklists", JSON.stringify( checklists ) )
  }
}
