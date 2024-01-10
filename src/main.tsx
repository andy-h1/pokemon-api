import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { client } from './ApolloClient'
import { ApolloProvider } from '@apollo/client'
import './index.css'

// Testing out browser msw 
// async function enableMocking() {
//   if(process.env.NODE_ENV !== 'development') {
//     return 
//   }
//   const {worker} = await import('./mocks/browser.ts')

//   return worker.start()
// }

// enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <ApolloProvider client={client}>
      <App />
      </ApolloProvider>
    </React.StrictMode>,
  )
// })

