// == Import npm
import React, { useState, useEffect } from "react";
import "semantic-ui-css/semantic.min.css";
import { Container, Image } from "semantic-ui-react";
import axios from "axios";
import ReactLoading from "react-loading";

// == Import
import "./styles.css";
import SearchBar from "src/components/SearchBar";
import Message from "src/components/Message";
import RepoResults from "src/components/RepoResults";
import githubLogo from "src/assets/images/logo-github.png";

// == Composant
const App = () => {
  const [repos, setRepos] = useState();
  const [newSearchValue, setNewSearchValue] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchReposFromSearch = search => {
    setLoading(true);
    const request = `https://api.github.com/search/repositories?q=${search}`;
    axios
      .get(request)
      .then(response => {
        // handle success
        setLoading(false);
        setRepos(response.data);
      })
      .catch(error => {
        // handle error
        console.log("error", error);
      });
  };

  return (
    <Container className="app">
      <Image src={githubLogo} size="small" />
      <SearchBar
        value={newSearchValue}
        changeValue={setNewSearchValue}
        fetchReposFromSearch={fetchReposFromSearch}
      />
      {!repos === true && <Message reposNumber={0} beforeSearch />}
      {loading === true && (
        <ReactLoading
          className="loading"
          type="spin"
          color="#1d1b1b"
          height={50}
          width={50}
        />
      )}
      {!repos === false && (
        <div>
          <Message reposNumber={repos.total_count} beforeSearch={false} />
          <RepoResults repos={repos.items} />
        </div>
      )}
    </Container>
  );
};

// == Export
export default App;
