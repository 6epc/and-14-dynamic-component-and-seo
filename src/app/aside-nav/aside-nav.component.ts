import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Inject, OnInit, Output, PLATFORM_ID, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { AsideChildOneComponent } from '../aside-child-one/aside-child-one.component';
import { AsideChildTwoComponent } from '../aside-child-two/aside-child-two.component';

@Component({
  selector: 'app-aside-nav',
  templateUrl: './aside-nav.component.html',
  styleUrls: ['./aside-nav.component.scss']
})
export class AsideNavComponent implements OnInit {

  @ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef;
  @Output() close = new EventEmitter<void>();

  isOpen = false;

  asideChildOne = AsideChildOneComponent;
  asideChildTwo = AsideChildTwoComponent;

  constructor(
    public viewContainerRef: ViewContainerRef,
    @Inject(PLATFORM_ID) private platformId: any
    ) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.isOpen = true;
      }, 0);
    }
  }

  createComponent(component: Type<any>) {
    this.container.clear();
    const childComp = this.container.createComponent(component);

    childComp.instance.close.subscribe((data: string) => {
      if (data && data === 'back') {
        childComp.destroy();
      } else {
        this.closeAside();
      }
    })
  }

  closeAside() {
    this.isOpen = false;
    setTimeout(() => {
      this.close.emit();
    }, 500);
  }
}
