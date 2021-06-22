import React, { useState, useEffect } from "react";
import memories from "./images/memories.png";
import { Container, Typography, AppBar, Grid, Grow } from "@material-ui/core";
import Posts from "./Posts/Posts";
import Form from "./Form/Form";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/post";
export default function App() {
  const [currentID, setCurrentID] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, []);
  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} color="inherit" position="static">
        <Typography className={classes.heading} variant="h2" align="center">
          My Memory Cards
        </Typography>
        <img
          className={classes.image}
          src={memories}
          alt="blogLogo"
          height="60px"
        />
      </AppBar>
      <Grow in >
        <Container>
          <Grid
          
            className={classes.mainContainer}
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid  item xl={12} sm={7}>
              <Posts currentID={currentID} setCurrentID={setCurrentID} />
            </Grid>

            <Grid  item xl={12} sm={4}>
              <Form currentID={currentID} setCurrentID={setCurrentID} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}
