import { isPlatformBrowser } from '@angular/common';
import { Component, EventEmitter, Inject, Input, OnInit, Output, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  isOpen!: boolean;
  title = '';
  text = '';
  @Output() close = new EventEmitter<void>();

  constructor(@Inject(PLATFORM_ID) private platformId: any) {

  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.isOpen = true;
      }, 0);
    }

  }

  closeModal() {
    this.isOpen = false;
    setTimeout(() => {
      this.close.emit();
    }, 500);
  }
}
