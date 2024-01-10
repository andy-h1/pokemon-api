import {HttpResponse, graphql} from 'msw';

export const mockAnimeResponse = {
    id: 1,
    title: {
        english: "Cowboy Bepop"
    },
    description: "Old school anime"
}

export const handlers =  [
    // graphql.query('GetAnime', ({query}) => {
    //     console.log('Intercepted a "GetAnime" GraphQL query:', query)
    // })
    graphql.query('GetAnime', () => {
        return HttpResponse.json({
            data: {
                Media: mockAnimeResponse
            }
        })
    })
]