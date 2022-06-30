// import PropTypes from 'prop-types'


export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
  return (
    <>
      <li className="item">
        <span  className={`${todo.done ? 'done' : ''}`} onClick={() => onToggleTodo(todo.id)}>{todo.description}</span>
        <button className="button is-danger" onClick={() => onDeleteTodo(todo.id)}>Borrar</button>
      </li>
    </>
  )
}




/* TodoItem.propTypes = {

}
 */