# Ngx-contextmenu

## Demo
<p align="center">
  <a href="https://christophhu.github.io/ngx-contextmenu"><img src="https://github.com/ChristophHu/ChristophHu/blob/main/assets/img/ngx-contextmenu.png" width="500" alt="image" /></a>
</p>

## Description
This repository contains an Angular 20 demo that showcases the `ngx-contextmenu` library. `ngx-contextmenu` provides a flexible and customizable context menu component for Angular applications. With this library, you can easily add right-click context menus to your web applications, enhancing user interaction and experience.
It’s easy to customize—sizes, colors, and behavior—to match your application’s design.

## Frameworks and Languages
<p align="left">
  <img alt="Static Badge" src="https://img.shields.io/badge/20.3.0-000000?style=for-the-badge&logo=angular&logoColor=white&label=Angular&labelColor=000000">
  <img alt="Static Badge" src="https://img.shields.io/badge/4.1.16-000000?style=for-the-badge&logo=tailwindcss&logoColor=white&label=TailwindCSS&labelColor=06B6D4&color=000000">
  <img alt="Static Badge" src="https://img.shields.io/badge/5.9.2-000000?style=for-the-badge&logo=typescript&logoColor=white&label=Typescript&labelColor=007ACC&color=000000">
</p>


## Installation
To run this project, you need to have Node.js installed on your machine. Clone the repository and run the following commands:

```bash
npm install @christophhu/ngx-contextmenu
```

## Usage
Import the DatatableComponent in the app.ts.

```typescript
import { NgxContextmenu } from '@christophhu/ngx-contextmenu';

@NgModule({
    imports: [
        NgxContextmenu,
        ...
    ]
...
})
```

```typescript
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
        console.log('is open', event.id)
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
```

Then, you can use the `<ngx-contextmenu>` component in your HTML templates as shown below:
```html
<ngx-contextmenu [items]="items" (action)="returnContextAction($event)" [element]="{ id: '1234', code: 'test'}"></ngx-contextmenu>
```

## Styles
You can customize the styles of the context menu by overriding the default CSS classes. Here’s an example of how to change the background color and text color of the context menu:

```css
ngx-shortcut 
  .shortcut
    gap: 0px
    justify-content: flex-end

    .shortcut-text
      @apply bg-transparent text-borderline h-full p-0 min-w-full
```

## License
This project is licensed under the MIT License.

The MIT License (MIT)
Copyright © 2025 <copyright holders>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
