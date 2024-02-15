// models/Product.ts
class Product {
    private id: number;
    private name: string;
  
    constructor(id: number, name: string) {
      this.id = id;
      this.name = name;
    }
  
    getId(): number {
      return this.id;
    }
  
    getName(): string {
      return this.name;
    }
  
    static createProduct(id: number, name: string): Product {
      return new Product(id, name);
    }
  }
  
  export default Product;
  