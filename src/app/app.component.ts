import { Component, ViewChild } from '@angular/core';
import { ModalComponent } from './modal/modal.component';
import { modalData, ModalDirective } from './modal/modal.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  modalData: modalData = {
    title: 'This is a title',
    text: `
      <ul>
        <li>It may containe anything</li>
        <li>may even contain tags</li>
      </ul>
      <p><b>Lorem ipsum dolor</b> sit amet consectetur adipisicing elit. Qui, culpa.</p>
    `
  }

  modalComponent = ModalComponent;

  @ViewChild(ModalDirective) refModalDirctive!: ModalDirective;

  showModal(): void {
    this.refModalDirctive.showModal();
  }
}
