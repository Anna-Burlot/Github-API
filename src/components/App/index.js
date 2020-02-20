// == Import npm
import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Container, Segment } from "semantic-ui-react";

// == Import
import "./styles.css";
import SearchBar from "src/components/SearchBar";
import Message from "src/components/Message";
import RepoResults from "src/components/RepoResults";

// == Composant
const App = () => (
  <Container className="app">
    <SearchBar />
    <Message resultsNumber={50} />
    <RepoResults />
  </Container>
);

// == Export
export default App;
