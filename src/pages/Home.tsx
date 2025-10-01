import React, {useState} from 'react';
import ProductGrid from '../components/products/ProductGrid';
import ProductFilters from '../components/products/ProductFilters';
import {Product} from '../types';

const sampleProducts: Product[] = [
  {
    id: 1,
    title: 'Wireless Headphones',
    description: 'High quality sound',
    price: 59.99,
    categoryId: 1,
    images: ['/images/headphones.jpg'],
    stock: 10,
    rating: 4.5,
  },
  {
    id: 2,
    title: 'Smart Watch',
    description: 'Fitness tracker & notifications',
    price: 99.99,
    categoryId: 2,
    images: ['/images/smartwatch.jpg'],
    stock: 15,
    rating: 4.2,
  },
  {
    id: 3,
    title: 'Gaming Mouse',
    description: 'Ergonomic RGB mouse',
    price: 39.99,
    categoryId: 1,
    images: ['/images/mouse.jpg'],
    stock: 20,
    rating: 4.7,
  },
  {
    id: 4,
    title: 'Laptop Backpack',
    description: 'Water-resistant, multiple compartments',
    price: 49.99,
    categoryId: 3,
    images: ['/images/backpack.jpg'],
    stock: 12,
    rating: 4.3,
  },
];

const Home: React.FC = () => {
  const categories = ['Electronics', 'Wearables', 'Accessories'];
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const filteredProducts = selectedCategory
    ? sampleProducts.filter(
        (p) => categories[p.categoryId - 1] === selectedCategory,
      )
    : sampleProducts;

  const handleAddToCart = (product: Product) =>
    console.log('Add to cart:', product);

  return (
    <div className="container mx-auto grid grid-cols-1 gap-6 px-4 py-6 md:grid-cols-4">
      <div className="md:col-span-1">
        <ProductFilters
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
      </div>

      <div className="md:col-span-3">
        {filteredProducts.length > 0 ? (
          <ProductGrid
            products={filteredProducts}
            onAddToCart={handleAddToCart}
          />
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
