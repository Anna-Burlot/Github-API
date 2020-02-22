// == Import npm
import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Segment, Input } from "semantic-ui-react";
import PropTypes from "prop-types";

// == Import

// == Composant
const SearchBar = ({ value, changeValue }) => {
  const handleInputChange = event => {
    changeValue(event.target.value);
  };
  const handleFormSubmit = event => {
    event.preventDefault();
    console.log("search " + value);
  };
  return (
    <Segment>
      <form onSubmit={handleFormSubmit}>
        <Input fluid icon="search" value={value} onChange={handleInputChange} />
      </form>
    </Segment>
  );
};

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  changeValue: PropTypes.func.isRequired
};

// == Export
export default SearchBar;
