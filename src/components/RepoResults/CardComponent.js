// == Import npm
import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Card } from "semantic-ui-react";
import PropTypes from "prop-types";

// == Import
import "./card.css";

// == Composant
const CardComponent = ({ result }) => {
  //console.log(result.id);
  return (
    <Card
      key={result.id}
      image={result.owner.avatar_url}
      // header={header}
      // meta={meta}
      // description={description}
    />
  );
};

CardComponent.propTypes = {};

// == Export
export default CardComponent;
