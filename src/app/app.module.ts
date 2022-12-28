import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import { ModalDirective } from './modal/modal.directive';
import { AsideNavComponent } from './aside-nav/aside-nav.component';
import { AsideChildOneComponent } from './aside-child-one/aside-child-one.component';
import { AsideChildTwoComponent } from './aside-child-two/aside-child-two.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    ModalDirective,
    AsideChildTwoComponent,
    AsideChildOneComponent,
    AsideNavComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
