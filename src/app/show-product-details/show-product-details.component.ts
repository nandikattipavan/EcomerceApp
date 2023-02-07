import { Component, OnInit } from '@angular/core';
import { ProductService } from '../_services/product.service';
import { Product } from '../_model/Product';
import {map} from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import {MatDialog} from '@angular/material/dialog';
import { ShowProductImageDailogComponent } from '../show-product-image-dailog/show-product-image-dailog.component';
import { ImageProcessingService } from '../_services/image-processing.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-product-details',
  templateUrl: './show-product-details.component.html',
  styleUrls: ['./show-product-details.component.css']
})
export class ShowProductDetailsComponent implements OnInit{

  productDetails:Product[]=[];
  constructor(private productService:ProductService,public imagesDialog:MatDialog,private imgService:ImageProcessingService,private router:Router){}
  pageNumber=0;
  showLoadButton=true;
  searchKey=''

  ngOnInit(): void {
   this.getAllProducts();
  }

    //.pipe(map((x:Product[],i)=>x.map((product:Product)=>this.imgService.createImages(product))))
  public getAllProducts(){
    this.productService.getAllProducts(this.pageNumber,this.searchKey).pipe(map((x:Product[],i)=>x.map((product:Product)=>this.imgService.createImages(product)))).subscribe((response:Product[])=>{
      if(response.length>0){
        this.showLoadButton=true;

      }
      else{
        this.showLoadButton=false;
      }
      response.forEach(r=>
      this.productDetails.push(r))},error=>{console.log(error)}
      )
  }
  deleteProduct(id:number){
   return  this.productService.deleteProduct(id).subscribe(
      (response)=>{console.log(response);
        this.getAllProducts();},(error:HttpErrorResponse)=>{console.log(error)}
    );
  }
  showImages(product:Product){
    console.log(product);
    this.imagesDialog.open(ShowProductImageDailogComponent,{
      data:{
        images:product.productImages
      },
      height:'400px',
      width:'800px'
    });
  }

  editProduct(productId:number){
    console.log(productId);
    this.router.navigate(['/addNewProduct',{productId:productId}]);
  }

  loadmoreProducts(){
 this.pageNumber=this.pageNumber+1;
 this.getAllProducts();
  }


}
