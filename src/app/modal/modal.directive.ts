import { Directive, Input, Type, ViewContainerRef } from '@angular/core';

export interface modalData {
  title: string;
  text: string;
}

@Directive({
  selector: '[appModal]'
})
export class ModalDirective {
  @Input() appModal!: Type<any>;
  @Input() modalDataInput!: modalData;

  constructor(public viewContainerRef: ViewContainerRef) { }

  showModal() {
    const modal = this.viewContainerRef.createComponent(this.appModal);
    modal.instance.title = this.modalDataInput.title;
    modal.instance.text = this.modalDataInput.text;
    modal.instance.close.subscribe(() => {
      this.viewContainerRef.clear();
    });
  }
}
