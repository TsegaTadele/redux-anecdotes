import ReactDOM from 'react-dom/client'
// import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
// import filterReducer from './reducers/filterReducer'
// import anecdoteReducer from './reducers/anecdoteReducer'
import Store from './store'

// import anecdoteService from './services/anecdoteService';
// import  { setAnecdote } from './reducers/anecdoteReducer'

//const reducer= combineReducers({ filter:filterReducer,anecdote:anecdoteReducer})

const store = Store// createStore(reducer)

// anecdoteService.getAll().then(a=>{
//   store.dispatch(setAnecdote(a));
// })

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)