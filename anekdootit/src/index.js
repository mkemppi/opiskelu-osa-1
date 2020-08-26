import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = (props) => {

  const [selected, setSelected] = useState(0)
  const [mostVoted, setMostVoted] = useState(0)
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0))
  const copy = [...points]

  const handleClick = () => {
    const min = 0;
    const max = anecdotes.length;
    const rand = Math.floor(Math.random() * (max - min)); 
    setSelected(rand)
  }

  const handleLikeClick = () => {
    copy[selected] += 1 
    setPoints(copy)   
  }

  const MostVoted = () => {
    let mostVoted = ""
    let lastVote = 0
    points.map(function(vote, i){
      if(vote>lastVote) {
        setMostVoted(vote)
        mostVoted = <div>{anecdotes[i]}<br/><b>{vote} ääntä</b></div>
        lastVote = vote
      }
    })
    return mostVoted
  }
  return (
    <div>
      <h3>Päivän anekdootti</h3>
      <b>{props.anecdotes[selected]}</b><br/>
      Ääniä {copy[selected]}<br/><br/>
      <Button handleClick={handleClick} text="Seuraava anekdootti" />
      <Button handleClick={handleLikeClick} text="Äänestä" />
      <br/><br/>
      <h3>Eniten ääniä saanut anekdootti</h3>
      <MostVoted/>
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