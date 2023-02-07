import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Product } from '../_model/Product';
import { Observable,of } from 'rxjs';
import { ProductService } from './product.service';
import { map } from 'rxjs/operators';
import { ImageProcessingService } from './image-processing.service';

@Injectable({
  providedIn: 'root'
})
export class ProductResolveService implements Resolve<Product>{

  constructor(private productService:ProductService,private imageService:ImageProcessingService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product> {
    const id =+route.paramMap.get("productId");
    console.log("Resolve id:"+id)
    if (id) {

      // //fetch details from backend
      return this.productService.getProductDetailsById(id).pipe(
        map(p=>this.imageService.createImages(p))
      );

    }
    else {
      //return null product
      return of(this.getProducts());
    }
  }
  getProducts() {
    return {
      productName: "",
      productDescription: "",
      productDiscountedPrice: 0,
      productActulPrice: 0,
      productImages: []
    };
  }
}
