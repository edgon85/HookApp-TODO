import { useForm } from "../hooks/useForm"


export const AddTodo = ({ onNewTodo }) => {


  const { description, onInputChange, onResetForm } = useForm({
    description: '',
  });

  const handleASubmitTodo = (event) => {
    event.preventDefault();

    if (description.length <= 3) return;

    const newTodo = {
      id: new Date().getTime(),
      description: description,
      done: false
    };

    onNewTodo(newTodo);

    onResetForm();
  }
  return (
    <form onSubmit={handleASubmitTodo}>
      <input
        type="text"
        placeholder="¿Qué hay que hace?"
        name="description"
        value={description}
        onChange={onInputChange}
      />

      <button
        className="button is-primary mt-2"
       type="submit"
      >Agregar</button>
    </form>
  )
}
