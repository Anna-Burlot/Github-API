// == Import npm
import React, { useState } from "react";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";

// == Import
import "./styles.css";
import SearchBar from "src/components/SearchBar";
import Message from "src/components/Message";
import RepoResults from "src/components/RepoResults";

import reposData from "src/data/repos";

// == Composant
const App = () => {
  const [repos, setRepos] = useState(reposData);
  const [newSearchValue, setNewSearchValue] = useState("");
  return (
    <Container className="app">
      <SearchBar value={newSearchValue} changeValue={setNewSearchValue} />
      <Message reposNumber={repos.total_count} />
      <RepoResults repos={repos.items} />
    </Container>
  );
};

// == Export
export default App;
