import { Injectable } from '@angular/core';
import { Product } from '../_model/Product';
import { FileHandle } from '../_model/file-handle.model';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ImageProcessingService {

  constructor(private sanitizer:DomSanitizer) { }

  public createImages(product:Product){
    const productImages:any[]=product.productImages;

    const productImagesToFileHandle:FileHandle[]=[];
    for(let i=0;i<productImages.length;i++){
      const imageFiledata=productImages[i];
      const imageblob=this.dataURItoBlob(imageFiledata.picByte,imageFiledata.type);
      const imagefile=new File([imageblob], imageFiledata.name, {type:imageFiledata.type} );
      const finalFileHandle:FileHandle={
        file:imagefile,
        url:this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(imagefile))
      };
      productImagesToFileHandle.push(finalFileHandle);
    }
    product.productImages=productImagesToFileHandle;
    return product;
  }

  public dataURItoBlob(picBytes,imageType){
    const byteString=window.atob(picBytes)
    const arrayBuffer=new ArrayBuffer(byteString.length);
    const int8Array=new Uint8Array(arrayBuffer);

    for(let i=0;i<byteString.length;i++){
      int8Array[i]=byteString.charCodeAt(i);
    }
    const blob=new Blob([int8Array],{type:imageType})
    return blob;
  }


}
