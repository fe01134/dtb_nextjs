// components/ProductButton.tsx

import Product from '../model/product';

interface ProductButtonProps {
  product: Product;
}

const ProductButton: React.FC<ProductButtonProps> = ({ product }) => {


  const handleClick = () => {

    // Replace the above line with the desired route or action when a button is clicked
  };

  return (
    <button onClick={handleClick}>
      {product.getName()} (ID: {product.getId()})
    </button>
  );
};

export default ProductButton;
