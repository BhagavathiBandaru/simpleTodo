// Write your code here

import './index.css'

const TodoItem = props => {
  const {todoData, deleteTodoItem} = props
  const {id, title} = todoData

  const clickToDelItem = () => {
    deleteTodoItem(id)
  }

  return (
    <li className="each-todo-item-container">
      <p className="todoText">{title}</p>
      <button className="button" type="button" onClick={clickToDelItem}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
