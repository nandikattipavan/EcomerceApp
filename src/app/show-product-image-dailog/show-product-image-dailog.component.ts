import { Component,Inject,OnInit } from '@angular/core';
import { MatDialog,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from '../_model/Product';
import { FileHandle } from '../_model/file-handle.model';
@Component({
  selector: 'app-show-product-image-dailog',
  templateUrl: './show-product-image-dailog.component.html',
  styleUrls: ['./show-product-image-dailog.component.css']
})
export class ShowProductImageDailogComponent implements OnInit{

  constructor(@Inject(MAT_DIALOG_DATA) public data:any){}
  ngOnInit(){
    this.recieveImages();
  }
  recieveImages(){
    console.log(this.data);
  }
}
