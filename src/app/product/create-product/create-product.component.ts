import { Component } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent 
{
  public product!:Product;
  public isInvalidForm!:boolean;

  constructor()
  {
    this.product = new Product(5, "", 0, "", 0, 0, 0, false);
  }

  createProduct(productForm: any) 
  {  
    console.log('Product Form input ', productForm);

    if (productForm.valid)
    {
      console.log('Stock Form is valid');     
      this.isInvalidForm = false;
      this.product.name = productForm.value.product.name;
      this.product.price = productForm.value.product.price;
      this.product.quantity = productForm.value.product.quantity;
      this.product.quantityCurrent = this.product.quantity;
      this.product.quantityInCart = 0;
      this.product.image = productForm.value.product.image;
      this.product.onSale = productForm.value.product.sale;
      console.log('Product finalized ', this.product);
    }
    else
    {
      console.error('Stock Form is invalid');
      this.isInvalidForm = true;
    }
  }
}
