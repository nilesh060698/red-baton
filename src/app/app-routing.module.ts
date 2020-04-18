import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SingleProductComponent } from './single-product/single-product.component';
import { LoadingPageComponent } from './loading-page/loading-page.component';

const routes: Routes = [
  {
    path: 'product',
    component:SingleProductComponent
  },
  {
    path: '',
    component:LoadingPageComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
