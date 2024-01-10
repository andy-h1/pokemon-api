import { useQuery, gql } from '@apollo/client'
import './App.css'

type AbilityData = {
  id: number,
  name: string,
}

type GenerationData = {
  id: number,
  name: string, 
  pokemon_v2_pokemonspecies: Array<PokemonData>
}

type PokemonData = {
  id: number,
  name: string
}

function App() {

  const GET_ABILITIES = gql`
    query GetAbilites {
      pokemon_v2_ability(limit: 10) {
        id
        name
      }
    }
  `

  const GET_POKEMON = gql`
    query GetPokemon {
      generations: pokemon_v2_generation {
        id
        name
        pokemon_v2_pokemonspecies {
          id
          name
        }
      }
    }
  `

  function DisplayAbilities() {
    const {loading, error, data} = useQuery(GET_ABILITIES);

    if(loading) return <p>Loading...</p>;
    if(error) return <p>Error: {error.message}</p>;

    return data.pokemon_v2_ability.map(({id, name, }: AbilityData) => (
      <div key={id}>
        <h2>{name}</h2>
      </div>
    ))
  }

  const DisplayPokemon =  () => {
    const {loading, error, data} = useQuery(GET_POKEMON);

    if(loading) return <p>Loading...</p>
    if(error) return <p>Error: {error.message}</p>

    return data.generations.map(({id, name, pokemon_v2_pokemonspecies}: GenerationData) => (
      <div key={id}>
        <p>{name}</p>
        {pokemon_v2_pokemonspecies.map(pokemon => (
          <div key={pokemon.id}>
            <p>{pokemon.name}</p>
            </div>
        ))}
      </div>
    ))
  }

  return (
    <>
      <div>
        <h2> Pokemon GraphQL App</h2>
        <DisplayAbilities />
        <DisplayPokemon />
      </div>
    </>
  )
}

export default App
