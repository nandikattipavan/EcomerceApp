import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../_model/Product';
import { ProductService } from '../_services/product.service';

@Component({
  selector: 'app-product-view-details',
  templateUrl: './product-view-details.component.html',
  styleUrls: ['./product-view-details.component.css']
})
export class ProductViewDetailsComponent implements OnInit{

  selectedProductIndex:number=0;
  product:Product;
  constructor(private route:ActivatedRoute,private router:Router,private prodService:ProductService){}

  ngOnInit(): void {
    this.product=this.route.snapshot.data['product'];
    console.log(this.product);
  }
  changeIndex(index:number){
    this.selectedProductIndex=index;
  }
  buyProduct(productId:number){
    this.router.navigate(['/buyProduct',{
      isSingleProductCheckout:true,id:productId
    }])
  }
  addtoCart(productId:number){
    this.prodService.addToCart(productId).subscribe(
      (response)=>{console.log(response)},error=>{console.log(error)}
    );
  }

}
