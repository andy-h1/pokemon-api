import { useQuery, gql } from "@apollo/client";
  
    type Pokemon = {
        id: number,
        name: string
    }

    type QueryResponse = {
        pokemons: Pokemon[]
    }

    interface PokemonSelectProps {
        onSelect: React.ChangeEventHandler<HTMLSelectElement>
    }


const GET_POKEMON = gql`
        query GetPokemon {
            pokemons: pokemon_v2_pokemon(limit:151) {
                id
                name
            }
        }
    `

export const PokemonSelect: React.FC<PokemonSelectProps> = ({ onSelect } ) => {
        const {loading, error, data} = useQuery<QueryResponse>(GET_POKEMON);

        if(loading) return <p>Loading...</p>
        if(error) return <p>Error: {error.message}</p>

        return (
                <select name='pokemon' onChange={onSelect}>
           {data?.pokemons.map((pokemon) => (
            <option key={pokemon.id} value={pokemon.name}>
                {pokemon.name}
            </option>
           ))}
        </select>
    )
      
  }