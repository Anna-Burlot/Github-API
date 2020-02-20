// == Import npm
import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Card, Image } from "semantic-ui-react";

// == Import

// == Composant
const CardComponent = ({ image, header, meta, description }) => (
  <Card image={image} header={header} meta={meta} description={description}>
    {/* <Image src={image} alt="astier" />
    <Card.Header>{header}</Card.Header>
    <Card.Meta>{meta}</Card.Meta>
    <Card.Description>{description}</Card.Description> */}
  </Card>
);

// == Export
export default CardComponent;
