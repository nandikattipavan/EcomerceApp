import { FileHandle } from "./file-handle.model";

export interface Product{
    productId?:number,
    productName:string,
    productDescription:string,
    productDiscountedPrice:number,
    productActulPrice:number,
    productImages:FileHandle[]
}
