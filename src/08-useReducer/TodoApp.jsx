
import '../assets/css/todo.css';
import { TodoList, AddTodo } from "./";
import { useTodo } from "../hooks/useTodo";


export const TodoApp = () => {

  const { todos, handleRemoveTodo, handleToggleTodo, handleNewTodo, pendingTodosCount, todosCount } = useTodo();

  return (
    <>
      <h1>TodoApp: {todosCount}, Pendientes: {pendingTodosCount }</h1>
      <hr />

      <div className="todo-content">
        <div className="items">
          <TodoList
            todoList={todos}
            onDeleteTodo={handleRemoveTodo}
            onToggleTodo={handleToggleTodo}
          />
        </div>
        <div className="form">
          <h3>Agregar TODO</h3>
          <hr />
          <AddTodo onNewTodo={handleNewTodo} />
        </div>
      </div>

    </>
  )
}
