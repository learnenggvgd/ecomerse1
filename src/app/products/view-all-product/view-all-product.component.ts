import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-all-product',
  templateUrl: './view-all-product.component.html',
  styleUrls: ['./view-all-product.component.css']
})
export class ViewAllProductComponent implements OnInit {

  productList:any;
 filterCategory:any
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.viewAllProduct().subscribe(data=>{
      console.log(data);
      this.productList=data;
      
    })
  }

filter(category:any){
this.filterCategory = this.productList
.filter((item:any)=>{
  if(item.categoryId==category||category==''){
    return item
  }
})
}

}
