import { useContext } from 'react'
import { useQuery } from 'react-query'
import ClipLoader from 'react-spinners/ClipLoader'

import ReadTodosRequest from '../api/ReadTodosRequest'
import { TokenContext } from '../App'
import '../App.css'
import CreateTodo from '../components/CreateTodo'
import TodoItem from '../components/TodoItem'

export default function TodosPage() {
    const [token] = useContext(TokenContext)
    //using ReactQuery instead
    const {isLoading, data: todos} = useQuery(
        'todos',
        ()=>ReadTodosRequest(token)
    ) 
  return (
    <>
      <h1>MERN TODO APP</h1>
      <div className='App.css'>
        { isLoading? (<ClipLoader  size={150} />)
        :
        todos.map((todo) => (
          <TodoItem key={todo._id} todo={todo}/>)
        )
      }
        <CreateTodo/>
        
        </div>
    </>
  )
}
