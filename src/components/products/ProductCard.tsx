// src/components/products/ProductCard.tsx
import React from 'react';

interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  images?: string[];
}

interface ProductCardProps {
  product?: Product; // <-- Make it optional for extra safety
  onAddToCart?: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({product, onAddToCart}) => {
  if (!product) {
    return (
      <div className="text-gray-500 flex flex-col items-center justify-center rounded border p-4">
        Product not available
      </div>
    );
  }

  return (
    <div className="flex flex-col rounded border p-4 hover:shadow-lg">
      <img
        src={product.images?.[0] || '/placeholder.png'}
        alt={product.title}
        className="h-48 w-full rounded object-cover"
      />
      <h3 className="mt-2 font-semibold">{product.title}</h3>
      <p className="text-gray-600">{product.description}</p>
      <div className="mt-auto flex items-center justify-between">
        <span className="font-bold">${product.price.toFixed(2)}</span>
        <button
          onClick={() => onAddToCart?.(product)}
          className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
