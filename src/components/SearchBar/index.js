// == Import npm
import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Search, Segment } from "semantic-ui-react";

// == Import
import "./search-bar.css";

// == Composant
const SearchBar = () => (
  <Segment className="search-bar">
    <Search input={{ fluid: true }} />
  </Segment>
);

// == Export
export default SearchBar;
