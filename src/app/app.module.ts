import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModalModule } from 'ng-modal-lib';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DesktopComponet } from './desktop/desktop.component';
import { CmdComponent } from './cmd/cmd.component';
import { PaintComponent } from './paint/paint.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MaterialModule} from './material.module'
// import { MAT_COLOR_FORMATS, NGX_MAT_COLOR_FORMATS } from '@angular-material-components/color-picker';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DesktopComponet,
    CmdComponent,
    PaintComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule,
    // BrowserAnimationsModule,
    // MaterialModule,
    ReactiveFormsModule
  ],
  providers: [
    // { provide: MAT_COLOR_FORMATS, useValue: NGX_MAT_COLOR_FORMATS }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
