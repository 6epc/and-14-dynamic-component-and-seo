import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Inject, OnInit, Output, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-aside-child-two',
  templateUrl: './aside-child-two.component.html',
  styleUrls: ['./aside-child-two.component.scss']
})
export class AsideChildTwoComponent implements OnInit {
  @Output() close = new EventEmitter<string>();

  isOpen = false;

  constructor(@Inject(PLATFORM_ID) private platformId: any) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.isOpen = true;
      }, 0);
    }
  }

  closeSelf() {
    this.isOpen = false;
    setTimeout(() => {
      this.close.emit('back');
    }, 500);
  }

  closeParent() {
    this.isOpen = false;
    this.close.emit('all');
  }
}
