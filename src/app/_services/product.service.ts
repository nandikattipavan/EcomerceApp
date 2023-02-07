import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../_model/Product';
import { OrderDetails } from '../_model/order-details.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url="http://localhost:9090";
  constructor(private httpclient:HttpClient) { }
  public addProduct(product:FormData){
    return this.httpclient.post<Product>(this.url+"/addNewProduct",product);
  }
  public getAllProducts(pageNumber,searchKey){
    return this.httpclient.get<Product[]>(this.url+"/getAllProducts?pageNumber="+pageNumber+"&searchKey="+searchKey);
  }
  public deleteProduct(id:number){
   return this.httpclient.delete(this.url+"/deleteProductDetails/"+id);
  }
  public getProductDetailsById(id:number){
    return this.httpclient.get<Product>(this.url+"/getProductDetailsById/"+id);
  }

  public getProductDetails(isSingleProductCheckout,productId){
    return this.httpclient.get<Product[]>(this.url+"/getProductDetails/"+isSingleProductCheckout+"/"+productId);
  }

  public placeOrder(orderDetails:OrderDetails){
    return this.httpclient.post(this.url+"/placeOrder",orderDetails);
  }
  public addToCart(productId){
    return this.httpclient.get("http://localhost:9090/addToCart/"+productId);
  }

}
