import React from 'eact';
import { useForm } from 'eact-hook-form';

function SearchForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    // поиск продуктов по запросу
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register('search')} />
      <button type="submit">Найти</button>
    </form>
  );
}

export default SearchForm;