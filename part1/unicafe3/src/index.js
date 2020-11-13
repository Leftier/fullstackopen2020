import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({name}) => <h1>{name}</h1>
const Stat = ({text, value}) => <p> {text} {value} </p>
const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  const average = (good - bad) / all
  const positive = (good / all) + "%"

  return (
    <>
      <Stat text="good" value={good}/>
      <Stat text="neutral" value={neutral}/>
      <Stat text="bad" value={bad}/>
      <Stat text="all" value={all}/>
      <Stat text="average" value={average}/>
      <Stat text="positive" value={positive}/>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const header1 = "give feedback"
  const header2 = "statistics"
  
  return (
    <div>
      <Header name={header1} />
      <button onClick={() => setGood(good + 1)}> good </button>
      <button onClick={() => setNeutral(neutral + 1)}> neutral </button>
      <button onClick={() => setBad(bad + 1)}> bad </button>
      <Header name={header2} />
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)