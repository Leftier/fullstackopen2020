import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({name}) => <h1>{name}</h1>
const Stat = ({type, num_votes}) => <p> {type} {num_votes} </p>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const header1 = "give feedback"
  const header2 = "statistics"

  const type1 = "good"
  const type2 = "neutral"
  const type3 = "bad"

  return (
    <div>
      <Header name={header1} />
      <button onClick={() => setGood(good + 1)}> {type1} </button>
      <button onClick={() => setNeutral(neutral + 1)}> {type2} </button>
      <button onClick={() => setBad(bad + 1)}> {type3} </button>
      <Header name={header2} />
      <Stat type={type1} num_votes={good}/>
      <Stat type={type2} num_votes={neutral}/>
      <Stat type={type3} num_votes={bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)