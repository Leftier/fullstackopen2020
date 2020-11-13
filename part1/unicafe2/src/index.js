import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({name}) => <h1>{name}</h1>
const Stat = ({type, value}) => <p> {type} {value} </p>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const header1 = "give feedback"
  const header2 = "statistics"

  const stat1 = "good"
  const stat2 = "neutral"
  const stat3 = "bad"
  const stat4 = "all"
  const stat5 = "average"
  const stat6 = "positive"

  const incrementValue = (variable, dispatcher) => {
    dispatcher(variable + 1)
    setAll(all + 1)
  }

  return (
    <div>
      <Header name={header1} />
      <button onClick={() => incrementValue(good, setGood)}> {stat1} </button>
      <button onClick={() => incrementValue(neutral, setNeutral)}> {stat2} </button>
      <button onClick={() => incrementValue(bad, setBad)}> {stat3} </button>
      <Header name={header2} />
      <Stat type={stat1} value={good}/>
      <Stat type={stat2} value={neutral}/>
      <Stat type={stat3} value={bad}/>
      <Stat type={stat4} value={all}/>
      <Stat type={stat5} value={(good - bad) / all}/>
      <Stat type={stat6} value={(good / all)  + "%"}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)