import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductQuantityChange } from 'src/app/model/product-quantity-change';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemComponent {

  @Input() public product!: Product;
  @Output() public quantityChanges:EventEmitter<ProductQuantityChange>=new EventEmitter();

  // public cartCount!:number;
  // public products!:Array<Product>;

  // Initial value
  constructor(){
  }

  // Web hook start initialization
  // ngOnInit() 
  // {    
    // this.products = [
    //   new Product("Apple", 0.30, "/assets/apple.png", 5, 5, true),
    //   new Product("Strawberry", 0.50, "https://www.thermofisher.com/blog/food/wp-content/uploads/sites/5/2015/08/single_strawberry__isolated_on_a_white_background.jpg", 10, 10, false),
    //   new Product("Egg", 0.10, "https://ichef.bbci.co.uk/news/976/cpsprodpb/7614/production/_105482203__105172250_gettyimages-857294664.jpg", 50, 50, true),
    //   new Product("Candy", 0.05, "https://img.freepik.com/premium-photo/candy-wrapped-candies-isolated-white-background_362171-1090.jpg?w=2000", 3, 3, true),
    // ];
  // }
    
  
  addToCart():void
  {
    this.quantityChanges.emit({product:this.product,changeInQuantity:-1})
  }
  removeFromCart():void
  {
    this.quantityChanges.emit({product:this.product,changeInQuantity:+1})
  }
  
  // addToCart(product:Product):void
  // {
  //   product.quantityCurrent = product.quantityCurrent - 1;
  //   this.cartCount++;
  // }
  // removeFromCart(product:Product):void
  // {
  //   product.quantityCurrent = product.quantityCurrent + 1;
  //   this.cartCount--;
  // }
}
