import { Component, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { AsideNavComponent } from './aside-nav/aside-nav.component';
import { ModalComponent } from './modal/modal.component';
import { modalData, ModalDirective } from './modal/modal.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(ModalDirective) refModalDirctive!: ModalDirective;
  @ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef;

  isDisabled = false;

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
  asideNav = AsideNavComponent;

  constructor(
    private title: Title,
    private meta: Meta,
    public viewContainerRef: ViewContainerRef
  ) {
    this.title.setTitle('Dynamic component and SEO opt.');
    this.meta.addTags([
      { name: 'keywords', content: 'angular, google, seo' },
      { name: 'description', content: 'This is app component' }
    ])
  }

  showModal(): void {
    this.refModalDirctive.showModal();
  }

  createComponent(component: Type<any>) {
    this.container.clear();

    const asideComp = this.container.createComponent(component);

    this.isDisabled = true;

    asideComp.instance.close.subscribe(() => {
      asideComp.destroy();
      this.isDisabled = false;
    })
  }
}
