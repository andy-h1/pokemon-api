import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import './index.css'

const client = new ApolloClient({
  uri: 'https://graphql.anilist.co',
  cache: new InMemoryCache(),
})

async function enableMocking() {
  if(process.env.NODE_ENV !== 'development') {
    return 
  }
  const {worker} = await import('./mocks/browser.tsx')

  return worker.start()
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <ApolloProvider client={client}>
      <App />
      </ApolloProvider>
    </React.StrictMode>,
  )
})

