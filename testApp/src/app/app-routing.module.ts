import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './sharing-data/components/parent/parent.component';
import { OfComponent } from './rxjs/components/of/of.component';
import { OperatorsComponent } from './rxjs/components/operators/operators.component';
import { HomeComponent } from './layout/home/components/home.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'parent', component: ParentComponent},
  {path: 'of', component: OfComponent},
  {path: 'operators', component: OperatorsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
