import { Component, OnInit } from '@angular/core';
import { ProductService } from '../_services/product.service';
import { map } from 'rxjs/operators';
import { Product } from '../_model/Product';
import { ImageProcessingService } from '../_services/image-processing.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private prodService: ProductService, private imgService: ImageProcessingService, private router: Router) { }
  ngOnInit(): void {
    this.getAllProducts();
  }
  productDetails = [];
  searchKey="";
  pageNumber: number = 0;
  showLoadButton = true;

  public getAllProducts() {
    this.prodService.getAllProducts(this.pageNumber,this.searchKey).pipe(map((x: Product[], i) => x.map((product: Product) => this.imgService.createImages(product)))).subscribe((response: Product[]) => {
      if (response.length > 0) {
        this.showLoadButton = true;
      }
      else {
        this.showLoadButton = false;
      }
      response.forEach(p =>
        this.productDetails.push(p))
      console.log(response)
    }, error => { console.log(error) }
    )
  }
  showProductDetails(productId: number) {
    this.router.navigate(['/productViewDetails', { productId: productId }])
  }
  loadMorePrdoucts() {
    this.pageNumber = this.pageNumber + 1;
    this.getAllProducts();
  }
  searchByKey(searchKey:NgForm) {
    this.searchKey=searchKey.value.key;
    this.pageNumber=0;
    this.productDetails=[];
  }
}
