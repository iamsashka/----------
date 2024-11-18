import { useForm } from 'eact-hook-form';

function Forms() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    // send the form data to the server
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Имя:</label>
      <input type="text" {...register('name')} />
      <br />
      <label>Email:</label>
      <input type="email" {...register('email')} />
      <br />
      <button type="submit">Отправить</button>
    </form>
  );
}

export default Forms;