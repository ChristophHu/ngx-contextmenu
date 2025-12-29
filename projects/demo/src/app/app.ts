import { Component } from '@angular/core'
import { ContextItem, NgxContextmenu, ContextActionReturn, ContextActionEnum, ContextItemClassEnum, ContextDefaultActions } from '../../../ngx-contextmenu/src/public-api'

@Component({
  selector: 'app-root',
  imports: [
    NgxContextmenu
  ],
  templateUrl: './app.html',
  styleUrl: './app.sass'
})
export class App {
  public items: ContextItem[] = [
    { id: '1', label: 'Back', icon: 'dot', shortcut: ["Shift", "L"], disabled: true, action: ContextActionEnum.DELETE },
    { id: '2', label: 'Forward', icon: 'dots', shortcut: ["Shift", "O"], action: ContextActionEnum.EDIT },
    { id: '3', label: 'Teilen', divider: true, items: [
      { id: '31', label: 'Facebook', icon: 'brand-facebook', shortcut: ["Shift", "D"], action: ContextActionEnum.EDIT },
      { id: '32', label: 'Instagram', icon: 'brand-instagram', shortcut: ["Shift", "I"], action: ContextActionEnum.EDIT }
    ]},
    { id: '4', label: 'Forward', class: ContextItemClassEnum.DANGER, icon: 'dots', shortcut: ["Shift", "A"], action: '5' }
  ]

  returnContextAction(event: ContextActionReturn) {
    switch (event.action) {
      case ContextDefaultActions.OPEN.toString():
        // console.log('is open', event.id)
        break
      case ContextActionEnum.DELETE:
        console.log('delete row', event.id)
        break
      case ContextActionEnum.EDIT:
        console.log('edit row', event.id)
        break
      default:
        console.log('default contextaction', event.id)
    }
  }
}
