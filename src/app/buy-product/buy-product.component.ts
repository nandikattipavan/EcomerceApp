import { Component,OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OrderDetails } from '../_model/order-details.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../_model/Product';
import { ProductService } from '../_services/product.service';

@Component({
  selector: 'app-buy-product',
  templateUrl: './buy-product.component.html',
  styleUrls: ['./buy-product.component.css']
})
export class BuyProductComponent implements OnInit{

  productDetails:Product[]=[];
  constructor(private route:ActivatedRoute,private prodService:ProductService,private router:Router) {}
  orderDetails:OrderDetails={
    fullName: '',
    fullAddress: '',
    contactNumber: '',
    alternateContactNumber: '',
    orderProductQuantity: []
  }
  placeOrder(orderForm:NgForm){
    this.prodService.placeOrder(this.orderDetails).subscribe(
      (resp)=>{
        console.log(resp);
        orderForm.reset();
        this.router.navigate(['/orderConfirm']);
      },
      (err)=>{console.log(err);}
    )
  }


  getQuantityForProduct(productId){
  const filteredProduct= this.orderDetails.orderProductQuantity.filter((productQuantity)=>productQuantity.productId=== productId);
  return filteredProduct[0].quantity;
  }
  getCalculatedTotal(productId,productDiscountedPrice){
   const filteredProduct=this.orderDetails.orderProductQuantity.filter(
      (productQuantity)=>productQuantity.productId===productId);
    return filteredProduct[0].quantity*productDiscountedPrice;
  }
  onQuantityChanged(q,productId){
    this.orderDetails.orderProductQuantity.filter(
      (orderProduct)=>orderProduct.productId===productId
    )[0].quantity=q;
  }
  getCalculatedGrandTotal(){
    let gt=0;
    this.orderDetails.orderProductQuantity.forEach(
      (productQuantity)=>{
        const price=this.productDetails.filter(product=>product.productId===productQuantity.productId)[0].productDiscountedPrice;
        gt=gt+price*productQuantity.quantity;
      }
    );
    return gt;
  }

  ngOnInit() :void{
   this.productDetails=this.route.snapshot.data['productDetails'];

    this.productDetails.forEach(
     x=>this.orderDetails.orderProductQuantity.push(
       {productId:x.productId,quantity:1}
     )
    );
    console.log(this.productDetails);
    console.log(this.orderDetails);
   }
}
