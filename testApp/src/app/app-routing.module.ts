import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './sharing-data/components/parent/parent.component';
import { OfComponent } from './rxjs/components/of/of.component';

const routes: Routes = [
  {path: 'parent', component: ParentComponent},
  {path: 'of', component: OfComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
