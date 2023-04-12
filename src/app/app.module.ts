import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { BgChangeDirDirective } from './CustomDirectives/bg-change-dir.directive';
import { UnlessDirective } from './CustomDirectives/unless.directive';

@NgModule({
  declarations: [AppComponent, UserDetailComponent, BgChangeDirDirective, UnlessDirective],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
