import "./App.css";
import client from "./api/client";
import { ApolloProvider } from "@apollo/client";

function App() {
  return (
    <ApolloProvider client={client}>
      <h1>Test</h1>
    </ApolloProvider>
  );
}

export default App;
