// == Import npm
import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Segment } from "semantic-ui-react";

// == Import

// == Composant
const Message = ({ resultsNumber }) => {
  let message = "";
  if (resultsNumber === 0) {
    message = "La recherche n'a donné aucun résultat";
  } else if (resultsNumber === 1) {
    message = `La réponse a donné ${resultsNumber} résultat`;
  } else {
    message = `La réponse a donné ${resultsNumber} résultats`;
  }
  return (
    <Segment className="message">
      <p>{message}</p>
    </Segment>
  );
};

// == Export
export default Message;
