import React from 'eact';
import ContactForm from '../forms/ContactForm';
import ProductList from '../components/ProductList';

function Home() {
  return (
    <div>
      <h1>Главная страница</h1>
      <ContactForm />
      <ProductList limit={10} />
    </div>
  );
}

export default Home;