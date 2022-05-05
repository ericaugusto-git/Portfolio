import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CmdComponent } from './cmd/cmd.component';
import { DesktopComponet } from './desktop/desktop.component';
import { PaintComponent } from './paint/paint.component';

const routes: Routes = [
  {path: '', component: DesktopComponet},
  {path: 'cmd', component: CmdComponent},
  {path: 'paint', component: PaintComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
