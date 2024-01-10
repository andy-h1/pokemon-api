import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const cache = new InMemoryCache()

const link = new HttpLink({
    uri: 'https://graphql.anilist.co',

    fetch:(...args) => fetch(...args),
})

export const client = new ApolloClient({
    cache,
    link,
})