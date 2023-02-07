import { OrderQuantity } from "./orderQuantity.model";

export interface OrderDetails{
  fullName:string;
	fullAddress:string;
	contactNumber:string;
	alternateContactNumber:string;
	orderProductQuantity:OrderQuantity[];
}
