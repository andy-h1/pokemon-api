import {useState} from 'react';
import './App.css'
import { AnimeList } from './components/AnimeList'

function App() {
  const [id, setId] = useState<number>(0);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement> ) => {
    setId(Number(event.target.value));
  }

  return (
    <>
      <div>
        <h2> Anime GraphQL App</h2>
        <label htmlFor='anime-id'>Anime ID:</label>
        <input type="text" onChange={handleInput} id='anime-id' />
        <AnimeList id={id} /> 
      </div>
    </>
  )
}

export default App
