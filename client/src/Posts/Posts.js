import React from "react";
import Post from "./Post/Post";
import useStyles from "./styles";
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@material-ui/core";
export default function Posts({ setCurrentID, currentID }) {
  const posts = useSelector((state) => state.posts);
  //console.log(posts);
  const classes = useStyles();
  return !posts.length ? (
    <>
      <h4>No Cards created yet, Go create one!!</h4>
      <CircularProgress />
    </>
  ) : (
    <Grid
      className={classes.mainContainer}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((post) => (
        <Grid iteam key={post.id} xs={12} sm={6}>
          <Post post={post} setCurrentID={setCurrentID} />
        </Grid>
      ))}
    </Grid>
  );
}
