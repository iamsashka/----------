import React from 'eact';
import SearchForm from '../forms/SearchForm';
import ProductList from '../components/ProductList';
import CategoryFilter from '../components/CategoryFilter';

function Catalog() {
  return (
    <div>
      <h1>Каталог</h1>
      <SearchForm />
      <CategoryFilter />
      <ProductList />
    </div>
  );
}

export default Catalog;