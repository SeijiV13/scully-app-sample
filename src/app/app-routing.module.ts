
import { PageTwoComponent } from './page-two/page-two.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageOneComponent } from './page-one/page-one.component';


const routes: Routes = [
  {
    path: 'one',
    component: PageOneComponent
  },
  {
    path: 'two',
    component: PageTwoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    useHash: true
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
