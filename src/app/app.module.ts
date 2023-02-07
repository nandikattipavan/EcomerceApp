import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { FormsModule } from '@angular/forms';
import{HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import { RouterModule } from '@angular/router';
import { AuthGuard } from './_auth/auth.guard';
import { AuthInterceptor } from './_auth/auth.interceptor';
import { UserService } from './_services/user.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddNewProductComponent } from './add-new-product/add-new-product.component';
import { ProductService } from './_services/product.service';
import { DragDirective } from './_directives/drag.directive';
import { ShowProductDetailsComponent } from './show-product-details/show-product-details.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ShowProductImageDailogComponent } from './show-product-image-dailog/show-product-image-dailog.component';
import { ImageProcessingService } from './_services/image-processing.service';
import { ProductViewDetailsComponent } from './product-view-details/product-view-details.component';
import { BuyProductComponent } from './buy-product/buy-product.component';
import { OrderConformationComponent } from './order-conformation/order-conformation.component';
import { RegisterUserComponent } from './register-user/register-user.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    UserComponent,
    LoginComponent,
    HeaderComponent,
    ForbiddenComponent,
    AddNewProductComponent,
    DragDirective,
    ShowProductDetailsComponent,
    ShowProductImageDailogComponent,
    ProductViewDetailsComponent,
    BuyProductComponent,
    OrderConformationComponent,
    RegisterUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    MatDialogModule

  ],
  providers: [AuthGuard,{
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi:true
  },UserService,ProductService,ImageProcessingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
