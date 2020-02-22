// == Import npm
import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Card } from "semantic-ui-react";
import PropTypes from "prop-types";

// == Import
import CardComponent from "./CardComponent";

// == Composant
const RepoResults = ({ repos }) => (
  <Card.Group itemsPerRow={3}>
    {repos.map(repo => (
      <Card
        key={repo.id}
        image={repo.owner.avatar_url}
        header={repo.name}
        meta={repo.owner.login}
        description={repo.description}
      />
    ))}
  </Card.Group>
);

RepoResults.propTypes = {
  repos: PropTypes.array.isRequired
};

// == Export
export default RepoResults;
