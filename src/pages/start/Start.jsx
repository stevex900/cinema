import React from "react";
import { withRouter } from "react-router";
import { NavLinkContainer as NavLink } from "../../components/button/button.styles";
import { Button, Icon, Grid } from "semantic-ui-react";
const Start = ({ history }) => {
  return (
    <Grid centered container columns={1} textAlign="center">
      <Grid.Column>
        {" "}
        <Button
          color="black"
          size="massive"
          animated
          onClick={() => {
            history.push("/choose-movie");
          }}
        >
          <Button.Content visible>Rozpocznij</Button.Content>
          <Button.Content hidden>
            <Icon name="arrow right" />
          </Button.Content>
        </Button>
      </Grid.Column>
    </Grid>
  );
};

export default withRouter(Start);
