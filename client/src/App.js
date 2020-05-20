import React from 'react';
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import Document from './Components/Document'
import './App.css';

const client = new ApolloClient({
  credentials: 'include',
  uri: 'http://localhost:5000/graphql'
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <div>Figma</div>
        <Document />
      </div>
    </ApolloProvider>
  );
}

export default App;
