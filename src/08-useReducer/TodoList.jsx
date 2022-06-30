import { TodoItem } from "./TodoItem"


export const TodoList = ({ todoList = [], onDeleteTodo, onToggleTodo }) => {



  return (
    <ul>
      {
        todoList.map(resp => {
          return <TodoItem
            key={resp.id}
            todo={resp}
            onDeleteTodo={ onDeleteTodo }
            onToggleTodo={ onToggleTodo }
          />
        })
      }
    </ul>
  )
}
