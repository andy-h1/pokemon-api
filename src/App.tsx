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
        <input type="input" onChange={handleInput} />
        <AnimeList id={id} /> 
      </div>
    </>
  )
}

export default App
