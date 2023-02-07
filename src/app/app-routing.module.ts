import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { AuthGuard } from './_auth/auth.guard';
import { AddNewProductComponent } from './add-new-product/add-new-product.component';
import { ShowProductDetailsComponent } from './show-product-details/show-product-details.component';
import { ProductResolveService } from './_services/product-resolve.service';
import { ProductViewDetailsComponent } from './product-view-details/product-view-details.component';
import { BuyProductComponent } from './buy-product/buy-product.component';
import { BuyProductResolverService } from './_services/buy-product-resolver.service';
import { OrderConformationComponent } from './order-conformation/order-conformation.component';
import { RegisterUserComponent } from './register-user/register-user.component';

const routes: Routes = [
  { path: '', redirectTo: "home", pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard], data: { roles: ['Admin'] } },
  { path: 'user', component: UserComponent, canActivate: [AuthGuard], data: { roles: ['User'] } },
  { path: 'login', component: LoginComponent },
  { path: 'forbidden', component: ForbiddenComponent },
  { path: 'addNewProduct', component: AddNewProductComponent, canActivate: [AuthGuard], data: { roles: ['Admin'] }, resolve: { product: ProductResolveService } },
  { path: 'showProducts', component: ShowProductDetailsComponent, canActivate: [AuthGuard], data: { roles: ['Admin'] } },
  { path: 'productViewDetails', component: ProductViewDetailsComponent, resolve: { product: ProductResolveService } },
  {
    path: 'buyProduct', component: BuyProductComponent,
    canActivate: [AuthGuard], data: { roles: ['User'] }, resolve: {productDetails: BuyProductResolverService,},
  },
  {path:'orderConfirm',component:OrderConformationComponent,canActivate: [AuthGuard], data: { roles: ['User'] }},
  {path:'register',component:RegisterUserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
