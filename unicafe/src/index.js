import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const StatisticsLine = (props) => {
  const { good, neutral, bad } = props.value
  const vastauksia = good + neutral + bad;
  if(props.text==="good") {
    return (
      <tr><td>Hyviä palautteita</td><td><b>{good}</b></td></tr>      
    )
  }
  if(props.text==="neutral") {
    return (
      <tr><td>Neutraaleja palautteita</td><td><b>{neutral}</b></td></tr>      
    )
  }
  if(props.text==="bad") {
    return (
      <tr><td>Huonoja palautteita</td><td><b>{bad}</b></td></tr>      
    )
  }
  if(props.text==="total") {
    return (
      <tr><td>Palautteita yhteensä</td><td><b>{vastauksia}</b></td></tr>      
    )
  }
  if(props.text==="average") {
    return (
      <tr><td>Keskiarvo</td><td><b>{Number(((good * 1) + (bad * -1))/vastauksia).toFixed(1) }</b></td></tr>      
    )
  }
  if(props.text==="positive") {
    return (
      <tr><td>Positiivisia palautteita</td><td><b>{ Number((good / vastauksia) * 100).toFixed(1) }%</b></td></tr>      
    )
  }

}

const Statistics = (props) => {
  const { good, neutral, bad } = props

  const vastauksia = good + neutral + bad;

  if (vastauksia>0) {
    return (
      <div>
      <h3>Tilastot</h3>
      <table>
        <tbody>
      <StatisticsLine text="good" value={props} />
      <StatisticsLine text="neutral" value={props} />
      <StatisticsLine text="bad" value={props} />
      <StatisticsLine text="total" value={props} />
      <StatisticsLine text="average" value={props} />
      <StatisticsLine text="positive" value={props} />
        </tbody>
      </table>
      </div>
    )
  }

  return (
    <div><h3>Ei vastauksia</h3></div>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (

    <div>
      <h1>Anna palautetta</h1>
      <Button handleClick={() => setGood(good + 1)} text="HYVÄ" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="NEUTRAALI" />
      <Button handleClick={() => setBad(bad + 1)} text="HUONO" />
      <Statistics good={good} neutral={neutral} bad={bad} />

    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
