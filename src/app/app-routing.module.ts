import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LensComponent } from './components/lens/lens.component';
import { NumbersComponent } from './components/numbers/numbers.component';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'lens', component: LensComponent},
  {path: 'numbers', component: NumbersComponent},
  {path: 'summary', component: OrderSummaryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
