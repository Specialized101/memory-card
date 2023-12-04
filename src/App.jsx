import { useState, useEffect } from 'react'
import { generateRandomIds, shuffleArray } from './utils/helper.js'
import Board from './components/Board.jsx'
import Score from './components/Score.jsx'
import './App.css'

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/'
const pokemonsIds = Array.from(generateRandomIds(20))

function App() {
  const [pokemonList, setPokemonList] = useState([])
  const [currentScore, setCurrentScore] = useState(0)
  const  [maxScore, setMaxScore] = useState(0)

  // Initial fetch
  useEffect(() => {
    const pokeData = []
    let ignore = false

    const fetchData = async () => {
      for (let i = 0; i < pokemonsIds.length; i++){ 
        const url = BASE_URL + pokemonsIds[i]
        const response = await fetch(url, { mode: 'cors' })
        const json = await response.json()
        if (!ignore) {
          pokeData.push({
            id: json.id,
            name: json.name,
            image: json.sprites.other["official-artwork"].front_default,
            clicked: 0
          })
        }
      }
      setPokemonList(pokeData)
    }

    fetchData()

    return () => {
      ignore = true
    }
  }, [])

  function handleClick(pokemon) {
    pokemon.clicked++
    setCurrentScore(currentScore + 1)

    if (pokemon.clicked > 1) {
      if (currentScore > maxScore) {
        setMaxScore(currentScore)
      }
    setCurrentScore(0)
    resetPokeClick()
    }

    const shuffled = shuffleArray(pokemonList)
    setPokemonList(shuffled)
  }

  function resetPokeClick() {
    setPokemonList(pokemonList.forEach(pokemon => pokemon.clicked = 0))
  }

  return (
    <>
      <div className='scores'>
        <Score title='Current score' value={currentScore}/>
        <Score title='Highest score' value={maxScore}/>
      </div>
      <Board data={pokemonList} handleClick={handleClick}/>
    </>
  )
}

export default App
