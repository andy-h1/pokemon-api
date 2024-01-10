import { useQuery, gql } from "@apollo/client";

const GET_ABILITY = gql `
query GetAbility {
    pokemon: pokemon_v2_pokemon(limit: 151, where: {name: {_eq: "bulbasaur"}}) {
      name
      pokemon_v2_pokemonmoves(limit: 4) {
        pokemon_v2_move {
          name
        }
      }
    }
  }
`

export const PokemonAbilities = () => {
    const {loading, error, data} = useQuery(GET_ABILITY);

    if(loading) return <p>Loading...</p>
    if(error) return <p>Error: {error.message}</p>

    return (
        <div>
       {data.pokemon.map((poke: any) => (
        <p>{poke.name}</p>
       )) }
    </div>
)
}