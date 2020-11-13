import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({name}) => <h1>{name}</h1>
const Button = ({eventHandler, text}) => <button onClick={eventHandler}>{text}</button>
const Stat = ({text, value}) => <p> {text} {value} </p>
const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  const average = (good - bad) / all
  const positive = (good / all) + "%"

  if(all === 0) {
    return (
      <p>No feedback given</p>
    )
  }

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
      <Button eventHandler={() => setGood(good + 1)} text="good"/>
      <Button eventHandler={() => setNeutral(neutral + 1)} text="neutral"/>
      <Button eventHandler={() => setBad(bad + 1)}  text="bad"/>
      <Header name={header2} />
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)