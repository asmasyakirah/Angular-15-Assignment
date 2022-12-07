export class Product 
{    
    constructor(
        public id:number,
        public name: string,
        public price: number,
        public image: string,
        public quantity: number,
        public quantityCurrent: number,
        public quantityInCart: number,
        public onSale: boolean,
    ){}
    
    isAvailable():boolean
    {
        console.log(this.name + " current quantity = "+this.quantityCurrent);
        return this.quantityCurrent>0;
    }
    
    reachedMax():boolean
    {
        return this.quantityCurrent==this.quantity;
    }
}
