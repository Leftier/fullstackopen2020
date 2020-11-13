import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Anecdote = ({content, votes}) => {
  return (
    <>
      <p>{content}</p>
      <p>has {votes} votes</p>
    </>
  )
}

function indexOfMax(arr) {
  if (arr.length === 0) {
      return -1;
  }

  var max = arr[0];
  var maxIndex = 0;

  for (var i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
          maxIndex = i;
          max = arr[i];
      }
  }

  return maxIndex;
}

const App = (props) => {
  const length = props.anecdotes.length
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(length).fill(0))
  const maxIndex = indexOfMax(votes)

  const setRandomAnecdote = () => {
    return (
      setSelected(Math.floor(Math.random() * length))
    )
  }
  
  const incrementVote = () => {
    let tmpArray = [...votes]
    tmpArray[selected] += 1   
    return (  
      setVotes(tmpArray)
    )
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote content={props.anecdotes[selected]} votes={votes[selected]}/>
      <button onClick={incrementVote}>vote</button>
      <button onClick={setRandomAnecdote}>next anecdote</button>
      <h1>Anecdote with most votes</h1>
      <Anecdote content={props.anecdotes[maxIndex]} votes={votes[maxIndex]}/>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)