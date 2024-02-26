import { Component } from '@angular/core';
import { CdkDrag, CdkDropList, CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-arrastrar-soltar',
  templateUrl: './arrastrar-soltar.component.html',
  styleUrl: './arrastrar-soltar.component.scss',
  standalone: true,
  imports: [CdkDrag, CdkDropList]
})
export class ArrastrarSoltarComponent {
  Ana = [
    'Figma',
    'Material',
    'Bootstrap',
    'Angular'
  ];

  Sonia = [
    'CMD',
    '/Bin/Bash',
    'Crocodrile',
    'Binarios'
  ];
  Tono = [
    'JS',
    'Angular',
    'BBDD',
    'Servidor'
  ];

  JoseLuis = [
    'Servlet',
    'JSP',
    'PHP',
    'JAVA'
  ];

  drop(event: CdkDragDrop<string[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
    }
  }
}
