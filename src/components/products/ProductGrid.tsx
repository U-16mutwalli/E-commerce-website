// src/components/products/ProductGrid.tsx
import React from 'react';
import {Product} from '../../types';
import ProductCard from './ProductCard';

interface ProductGridProps {
  products: Product[];
  onAddToCart?: (product: Product) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({products, onAddToCart}) => (
  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    {products.map((p) => (
      <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} />
    ))}
  </div>
);

export default ProductGrid;
