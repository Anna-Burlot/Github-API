// == Import npm
import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Segment, Input } from "semantic-ui-react";

// == Import

// == Composant
const SearchBar = () => (
  <Segment>
    <Input fluid icon="search" />
  </Segment>
);

// == Export
export default SearchBar;
