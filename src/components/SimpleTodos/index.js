import {Component} from 'react'

import TodoItem from '../TodoItem'

import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {todosListItems: initialTodosList}

  deleteTodoItem = id => {
    const {todosListItems} = this.state
    const remainingTodoList = todosListItems.filter(
      eachTodo => eachTodo.id !== id,
    )

    this.setState({todosListItems: remainingTodoList})
  }

  render() {
    const {todosListItems} = this.state

    return (
      <div className="background-container">
        <div className="todoListContainer">
          <h1 className="heading">Simple Todos</h1>
          <ul className="todos-list-seq">
            {todosListItems.map(eachItem => (
              <TodoItem
                todoData={eachItem}
                key={eachItem.id}
                deleteTodoItem={this.deleteTodoItem}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
