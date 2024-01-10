import { useQuery, gql } from "@apollo/client";

const GET_ANIME = gql `
    query GetAnime ($id: Int) {
        Media (id: $id, type: ANIME ) {
            id 
            title {
                english
            }
            description
        }
    }
`

type AnimeListProp = {
    id: number
}

// const id = 223

//223

export const AnimeList: React.FC<AnimeListProp> = (id) => {
    const {loading, error, data} = useQuery(GET_ANIME, {variables: id, pollInterval: 500});

    if(loading) return <p>Loading...</p>
    if(error) return <p>Error: {error.message}</p>

    return (
        <>
        <h1>{data.Media.title.english}</h1>
        <p>{data.Media.description}</p>
        </>
    )
}