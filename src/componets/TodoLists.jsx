import classNames from 'classnames';
import "bootstrap-icons/font/bootstrap-icons.css"
import "./TodoLists.css"

function TodoLists({todos}){
  const {categoryColor} = todos
  const titleClass = classNames("category", categoryColor);
  function returnDday(todo) {
    return Math.round(new Date(todo.end).getTime()- new Date(todo.start).getTime())/(1000*60*60*24)
  }
    return(
      <>
      <ul className="items">
        {
        todos.map(todo => <li key={todo.id} className="item">
          <div className="category">{todo.category}</div>
          <div className="main">
          <h2 className='text-primary'>{todo.title}</h2>
          <p className='text-secondary'>{todo.desc}</p>
          <p><i className="bi bi-people gap-1"></i> {todo.participant}</p>
          </div>
          <div className="extra"><span><i className="bi bi-calendar-check"></i> {returnDday(todo)}</span></div>
        </li>)
        }
      </ul>
      </>
    )
  }

export default TodoLists