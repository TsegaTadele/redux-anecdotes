import { createSlice } from "@reduxjs/toolkit";
import anecdoteService from "../services/anecdoteService";

const anecdoteSlice = createSlice({
  name: "anecdote",
  initialState:[],
  reducers: {
 
    updateVotes(state, action) {
      const { id, votes } = action.payload;
     
    const anecdoteToChange = state.find((a) => a.id === id);
      const changedAnecdotes = {
        ...anecdoteToChange,
        votes: votes ,
      };

      return state
        .map((a) => (a.id !== id ? a : changedAnecdotes))
        .sort((a, b) => b.votes - a.votes);

  },
    setAnecdote(state,action){
      return action.payload
    },
    appendAnecdote(state,action){
      state.push(action.payload)
    }
  },
});

export const initializeAnecdote=()=>{

return async dispatch=>{
  const anecdote=await anecdoteService.getAll()
  const sourtedAnecdote=anecdote.sort((a, b) => b.votes - a.votes);
  dispatch(setAnecdote(sourtedAnecdote))
}
}


export const createAnecdotes=content=>{
  return async dispatch=>{
    const newAnecode=await anecdoteService.createNew(content)
    dispatch(appendAnecdote(newAnecode))
  }
}

export const updateAnecdoteVote=(anecdote)=>{

  const updatedVotes = anecdote.votes + 1;

  return async dispatch =>{
 const response=    await anecdoteService.updateVotes(anecdote.id, updatedVotes);
  console.log("response ", response)
     dispatch(updateVotes({ id: anecdote.id, votes: updatedVotes }));
  }

}

export const { setAnecdote ,appendAnecdote,updateVotes} = anecdoteSlice.actions;
export default anecdoteSlice.reducer;
