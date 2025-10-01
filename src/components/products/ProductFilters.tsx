// src/components/products/ProductFiltersStatic.tsx
import React from 'react';

const ProductFilters: React.FC = () => {
  const categories = ['Electronics', 'Clothing', 'Books', 'Home'];
  const selectedCategory = 'Electronics'; // default selection

  return (
    <div className="space-y-4 rounded bg-white p-4 shadow">
      <h4 className="font-semibold">Categories</h4>
      {categories.map((cat) => (
        <label key={cat} className="flex items-center space-x-2">
          <input
            type="radio"
            name="category"
            value={cat}
            checked={selectedCategory === cat}
            readOnly
          />
          <span>{cat}</span>
        </label>
      ))}
    </div>
  );
};

export default ProductFilters;
