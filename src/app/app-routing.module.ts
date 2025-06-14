import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { InternshipComponent } from './internship/internship.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    title: 'Best Rehabilitation center in Gurgaon | Home'
  },
  {
    path:'about',
    component:AboutComponent,
    title: 'Best Rehabilitation center in Gurgaon | About'
  },
  {
    path:'products',
    component:ProductsComponent,
    title:'Best Rehabilitation center in Gurgaon | Team'
  },
  {
    path:'contact',
    component:ContactComponent,
    title:'Best Rehabilitation center in Gurgaon | Contact us'
  },
  {
    path:'internship',
    component:InternshipComponent,
    title:'Best Rehabilitation center in Gurgaon | Intership Programs'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
