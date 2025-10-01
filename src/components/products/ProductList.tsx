// Products/ProductList.tsx
import React, {useState} from 'react';
import ProductForm from './ProductForm';
import ProductFilters from './ProductFilters';
import GenericTable from '../Forms/Table/GenericTable';

const ProductList: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Electronics', 'Clothing', 'Books'];

  const products = [
    {name: 'Laptop', price: 50000, stock: 10, category: 'Electronics'},
    {name: 'T-Shirt', price: 500, stock: 50, category: 'Clothing'},
    {name: 'Book', price: 300, stock: 20, category: 'Books'},
  ];

  // Filter products based on selected category
  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="grid grid-cols-12 gap-6">
      {/* Filters on the left */}
      <div className="col-span-3">
        <ProductFilters
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
      </div>

      {/* Form + Table on the right */}
      <div className="col-span-9 space-y-6">
        <ProductForm />
        <GenericTable
          columns={['Name', 'Price', 'Stock', 'Category']}
          data={filteredProducts}
        />
      </div>
    </div>
  );
};

export default ProductList;
