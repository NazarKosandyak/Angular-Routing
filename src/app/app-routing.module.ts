import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CenzorComponent } from './pages/cenzor/cenzor.component';
import { UserlistComponent } from './pages/userlist/userlist.component';
import { CountlistComponent } from './pages/countlist/countlist.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'home'},
  {path:'home',component:HomeComponent},
  {path:'cenzor',component:CenzorComponent},
  {path:'countlist',component:CountlistComponent},
  {path:'userlist',component:UserlistComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
