import "./App.css";
import client from "./api/client";
import { ApolloProvider } from "@apollo/client";
import Routes from "./routes";

function App() {
  return (
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>
  );
}

export default App;
