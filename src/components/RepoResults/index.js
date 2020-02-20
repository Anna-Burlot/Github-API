// == Import npm
import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Card } from "semantic-ui-react";

// == Import
import CardComponent from "./CardComponent";

// == Composant
const RepoResults = () => {
  const image =
    "https://lh3.googleusercontent.com/kXVrAPrNXjNFBbEJoie3Vl5fdW--fml1myrR45xvC3fH0aLYQvnB4oF2xXvGASKNfmyJaJGDJhL4ZZnzqSk1klYmN_aVZWbUx8bFH28IKbGiMzVTu_aYHhAGbjXyxAcfCxKd_i_ek5JVGqRJJ03CRAYVhf3KmNGdPVjJFgnrppnWUgInrJefsxe1eS2UuYg89RednEROZXhJcH4IZ8FYVfcGN44q4nDnr5kUxmiFzsPPhxjae-dB5GxjJ-ExQp0kjnklKkQyd6IUZ6XaR-Eq0v-mTe6F3fOnuVS4ku3S6vWSTJmnyOJKhBp29qZ-wW5fVeBFAFSYcY6W5sCdHJ4ATP9yxxd6eend2WolM9iiPoFQKgzZNPxt1tyIvGzzWqGi4Va7JYCK_Y19tdTshO1iM2lQFLIUzRRTK7pe9v4JLA2B79QXp8dWVLUa6oACPmyn15AftjnzoSLm39h-HfJ87iP3813s4W5cygHZB7v0gPDeFV94hR1TSfuRcE9Y5qRa4zi3GjTgTCiWDWfDF-NvbxFz4PVS8yscslLOAx1CsxY-HUE2dzI7ubbfXs9lLbaZAU5Nl0hNnYwvhsNXJ_bXMDyrtiZ_m_388vcA8CaYg6m1-ArzmVg-S1BuaZrGlTPUzH9x7yrcPwjjvecXGbPN4wm0C-RDyjQvnwZj87NgXxQCLd0tgZi89wM=s720-no";
  return (
    <Card.Group>
      <CardComponent
        image={image}
        header="Coucou"
        meta="coucoucoucoucoucoucouco"
        description="pleindecoucouspleindecoucouspleindecoucouspleindecoucouspleindecoucouspleindecoucouspleindecoucous"
      />
      <CardComponent
        image={image}
        header="Coucou"
        meta="coucoucoucoucoucoucouco"
        description="pleindecoucouspleindecoucouspleindecoucouspleindecoucouspleindecoucouspleindecoucouspleindecoucous"
      />
    </Card.Group>
  );
};

// == Export
export default RepoResults;
