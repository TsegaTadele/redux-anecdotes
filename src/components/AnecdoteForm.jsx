import { useDispatch } from 'react-redux'
import { createAnecdotes } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

 
const newAnecdote=async (event)=>{
  event.preventDefault();
const content =event.target.anecdote.value
event.target.anecdote.value=''

console.log("form newAnecdote ",newAnecdote)
dispatch(createAnecdotes(content))
dispatch(setNotification({content,timer:2}))
// dispatch(displayMessage(content))
// setTimeout(() => {
//   dispatch(removeMessage())
// }, 5000)

}
  return (
    <div>
       <h2>create new</h2>
      <form onSubmit={newAnecdote}>
        <div><input name='anecdote'/></div>
        <button>create</button>
      </form>
    </div>
  )
}


export default AnecdoteForm