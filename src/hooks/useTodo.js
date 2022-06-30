import { useEffect, useReducer } from "react"
import { todoReducer } from "../08-useReducer/todoReducer";


export const useTodo = () => {

  const initialState = [];

  const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
  }

  const [todos, dispatch] = useReducer(todoReducer, initialState, init);


  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));

  }, [todos])



  const handleNewTodo = (todo) => {
    const action = {
      type: '[TODO] Add Todo',
      payload: todo
    }

    dispatch(action);
  }

  const handleRemoveTodo = (todoId) => {
    const action = {
      type: '[TODO Remove Todo]',
      payload: todoId
    }

    dispatch(action);
  }

  const handleToggleTodo = (todoId) => {
    dispatch({
      type: '[TODO Toggle Todo]',
      payload: todoId
    });
  }



  return {
    todos,
    handleRemoveTodo,
    handleToggleTodo,
    handleNewTodo,
    pendingTodosCount: todos.filter(todo => !todo.done).length,
    todosCount: todos.length,
  }
}
