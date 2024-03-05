// pages/products.tsx
import { useEffect, useState } from 'react';
import ProductButton from '../components/ProductButton';
import Product from '../model/product';

const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Function to fetch products from the API
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products'); // Assuming your API endpoint is '/api/products'
        const data = await response.json();

        console.debug(data)
        
        // Map received data to Product objects using the createProduct method
        const productObjects = data.products.map((productData) =>
          Product.createProduct(productData.id, productData.name)
        );

        setProducts(productObjects);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []); // Empty dependency array ensures the useEffect runs only once on component mount

  return (
    <div>
      <h1>Product List</h1>
      <div>
        {products.slice(0, 3).map((product) => (
          <ProductButton key={product.getId()} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;

