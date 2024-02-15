// pages/api/products.ts
export default (req, res) => {
    // Replace this with your actual data retrieval logic
    const products = [
      { id: 1, name: 'Product 1' },
      { id: 2, name: 'Product 2' },
      { id: 3, name: 'Product 3' },
      { id: 4, name: 'Product 4' },
      { id: 5, name: 'Product 5' },
      { id: 6, name: 'Product 6' },
      // ... other products
    ];
  
    res.status(200).json({ products });
  };
  