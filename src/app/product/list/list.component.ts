import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductQuantityChange } from 'src/app/model/product-quantity-change';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{

  public products:Array<Product>=[];
  public cart!:number;

  constructor(){}

  ngOnInit(): void {
    this.products = [
      // new Product(1,'Test Product - 1', 50, 'http://via.placeholder.com/150x150', 0, 0, true),
      // new Product(2,'Test Product - 2', 150, 'http://via.placeholder.com/150x150', 0, 0, false),
      // new Product(3,'Test Product - 3', 250, 'http://via.placeholder.com/150x150', 0, 0, true)
      new Product(1, "Apple", 0.30, "/assets/apple.png", 5, 5, 0, true),
      new Product(2, "Strawberry", 0.50, "https://www.thermofisher.com/blog/food/wp-content/uploads/sites/5/2015/08/single_strawberry__isolated_on_a_white_background.jpg", 10, 10, 0, false),
      new Product(3, "Egg", 0.10, "https://ichef.bbci.co.uk/news/976/cpsprodpb/7614/production/_105482203__105172250_gettyimages-857294664.jpg", 50, 50, 0, true),
      new Product(4, "Candy", 0.05, "https://img.freepik.com/premium-photo/candy-wrapped-candies-isolated-white-background_362171-1090.jpg?w=2000", 3, 3, 0, true),
      ];
    
      this.cart = 0;
  }

  onQuantityChange(change: any) 
  {
    console.log(change);
    const product = this.products.find(prod => {
      return change.product.id === prod.id;
    });
    if(product != null)
    {
      product.quantityCurrent += change.changeInQuantity;
      product.quantityInCart -= change.changeInQuantity;
      this.cart += change.changeInQuantity;
    }
  }


}
