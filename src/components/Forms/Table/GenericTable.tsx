// Products/ProductList.tsx
import ProductFilters from '@/components/products/ProductFilters';
import ProductForm from '@/components/products/ProductForm';
import React, {useState} from 'react';
import {FiEdit} from 'react-icons/fi';
import {MdDelete} from 'react-icons/md';
import GenericTable from '@/components/Forms/Table/GenericTable';
interface Product {
  name: string;
  price: number;
  stock: number;
  category: string;
}

const ProductList: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Electronics', 'Clothing', 'Books'];

  const products: Product[] = [
    {name: 'Laptop', price: 50000, stock: 10, category: 'Electronics'},
    {name: 'T-Shirt', price: 500, stock: 50, category: 'Clothing'},
    {name: 'Book', price: 300, stock: 20, category: 'Books'},
  ];

  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter((p) => p.category === selectedCategory);

  // Define columns with optional actions
  const columns: Column<Product>[] = [
    {header: 'Name', accessor: 'name', sortable: true},
    {header: 'Price', accessor: 'price', sortable: true},
    {header: 'Stock', accessor: 'stock', sortable: true},
    {header: 'Category', accessor: 'category', sortable: true},
  ];

  const handleEdit = (product: Product) => {
    alert(`Edit product: ${product.name}`);
  };

  const handleDelete = (product: Product) => {
    alert(`Delete product: ${product.name}`);
  };

  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-3">
        <ProductFilters
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
      </div>

      <div className="col-span-9 space-y-6">
        <ProductForm />
        <GenericTable
          columns={columns}
          data={filteredProducts}
          action
          onEdit={handleEdit}
          onDelete={handleDelete}
          searchAble
        />
      </div>
    </div>
  );
};

export default ProductList;
