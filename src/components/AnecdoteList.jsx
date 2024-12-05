import { useSelector, useDispatch } from "react-redux";
import { updateVotes } from "../reducers/anecdoteReducer";
import { displayMessage, removeMessage, setNotification } from "../reducers/notificationReducer";
import anecdoteService from "../services/anecdoteService";

const AnecdoteList = () => {
  //  const anecdotes = useSelector(state => state.anecdote)

  const anecdotes = useSelector(({ anecdote, filter }) => {
// console.log("filter on AnecdoteList ", anecdote)

    if (!filter) return anecdote;
    else
      return anecdote.filter((a) =>
        a.content.toLowerCase().includes(filter.toLowerCase())
      );
  });
  const dispatch = useDispatch();

  // const vote = (id) => {
  //   // console.log("vote", id);
  
  //   dispatch(votingAnecdotes(id));
  //   const votedAnecdote=anecdotes.find(a=>a.id=== id);
  //   dispatch(displayMessage(votedAnecdote.content))
  //    setTimeout(() => {
  //     dispatch(removeMessage())
  //   }, 5000)
  // };

  const handleVote = async (anecdote) => {
    const updatedVotes = anecdote.votes + 1;

    // console.log("vote", updatedVotes);
    await anecdoteService.updateVotes(anecdote.id, updatedVotes);
    
    dispatch(updateVotes({ id: anecdote.id, votes: updatedVotes }));

   dispatch( setNotification({content:anecdote.content, timer:3}))
 
};
  return (
    <div>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnecdoteList;
