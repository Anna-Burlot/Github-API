// == Import npm
import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Segment } from "semantic-ui-react";
import PropTypes from "prop-types";

// == Import

// == Composant
const Message = ({ reposNumber, beforeSearch }) => {
  let message = "";
  if (!beforeSearch) {
    if (reposNumber === 0) {
      message = "La recherche n'a donné aucun résultat";
    } else if (reposNumber === 1) {
      message = `La recherche a donné ${reposNumber} résultat`;
    } else {
      message = `La recherche a donné ${reposNumber} résultats`;
    }
  } else {
    message = "Cherchez vos premiers repos github !";
  }
  return (
    <Segment className="message">
      <p>{message}</p>
    </Segment>
  );
};

Message.propTypes = {
  reposNumber: PropTypes.number.isRequired,
  beforeSearch: PropTypes.bool.isRequired
};

// == Export
export default Message;
