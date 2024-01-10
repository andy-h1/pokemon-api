import { ApolloProvider } from "@apollo/client";
import { client } from "./ApolloClient";
import { render, screen, userEvent} from './utils/test-utils'
import App from './App'
import { mockAnimeResponse } from './mocks/handlers'


test('Should return anime title and description when id typed in', async () => {
    render(
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    )

    expect(screen.getByRole('heading', {name: 'Anime GraphQL App', level: 2})).toBeDefined()

    const input = screen.getByLabelText(/Anime ID/i)
    await userEvent.type(input, "1")

    expect(await screen.findByRole('heading', {name: mockAnimeResponse.title.english})).toBeDefined()
    expect(screen.getByText(mockAnimeResponse.description)).toBeDefined();
})