import { ChangeDetectionStrategy, Component, EventEmitter, HostListener, inject, Input, Output, ViewChild } from '@angular/core';
import { ContextItem } from '../../models/context-item.model';
import { Observable } from 'rxjs';
import { ContextDefaultActions } from '../../models/context-default-actions.model';
import { NgxShortcut, NgxShortcutService } from '@christophhu/ngx-shortcut';
import { NgxIconsComponent } from '@christophhu/ngx-icons'
import { AsyncPipe, NgClass } from '@angular/common';

@Component({
  selector: 'ngx-contextmenu',
  imports: [
    AsyncPipe,
    NgClass,
    NgxIconsComponent,
    NgxShortcut
  ],
  templateUrl: './ngx-contextmenu.html',
  styleUrl: './ngx-contextmenu.sass',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(window:resize)': 'onResize($event)',
    '(document:click)': 'click($event)',
    '(window:blur)': 'blur($event)',
    '(document:contextmenu)': 'rightclick($event)'
  }
})
export class NgxContextmenu {
  @ViewChild('ctxMenu') ctxMenu: any
  @Input() items: ContextItem[] = []
  @Input() element: any | undefined
  @Output() action: EventEmitter<any> = new EventEmitter<any>()

  isOpen = false
  isShortcutActivated = false

  shortcuts$: Observable<any> | undefined

  innerHeight: number = window.innerHeight
  innerWidth: number = window.innerWidth

  private readonly ngxShortcutService = inject(NgxShortcutService);

  constructor() {

  }

  ngAfterViewInit(): void {
    this.items.map((item: ContextItem) => {
      if (item.shortcut) {
        this.ngxShortcutService.addShortcut({ keys: item.shortcut, cb: () => { this.runaction({ id: item.id, action: item.action }) } })
      }
      if (item.items) {
        item.items.map((subitem: ContextItem) => {
          if (subitem.shortcut) {
            this.ngxShortcutService.addShortcut({ keys: subitem.shortcut, cb: () => { this.runaction({ id: subitem.id, action: subitem.action }) } })
          }
        })
      }
    })
  }

  onResize(event: any) {
    this.ctxMenuClose()
    this.innerHeight = window.innerHeight
    this.innerWidth = window.innerWidth
  }
  click(event: MouseEvent) {
    this.ctxMenuClose()
  }
  blur(event: FocusEvent) {
    this.ctxMenuClose()
  }
  rightclick(event: MouseEvent) {
    if (!this.isOpen) {
      this.ctxMenuOpen()
      var sijX = event.clientX
      var sijY = event.clientY
      if (event.clientY + this.ctxMenu.nativeElement.offsetHeight > this.innerHeight) sijY -= this.ctxMenu.nativeElement.offsetHeight;
      if (sijX + this.ctxMenu.nativeElement.offsetWidth > this.innerWidth) sijX -= this.ctxMenu.nativeElement.offsetWidth;
      this.ctxMenu.nativeElement.style.left = Math.max(sijX, 0) + 'px'
      this.ctxMenu.nativeElement.style.top = Math.max(sijY, 0) + 'px'
      this.action.emit({ id: this.element?.id, action: ContextDefaultActions.OPEN })
    } else {
      this.ctxMenuClose()
    }
    event.preventDefault()
  }

  ctxMenuClose() {
    this.isOpen = false
    this.ctxMenu.nativeElement.hidden = true
  }
  ctxMenuOpen() {
    this.isOpen = true
    this.ctxMenu.nativeElement.hidden = false
  }

  runaction(item: Partial<ContextItem>) {
    if (!item.disabled) this.action.emit({ id: item.id, action: item.action })
  }
}
