import React, { useState, useEffect } from "react";
import useStyles from "./styles";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { createPost, updatePost } from "../actions/post";
export default function Form({ currentID, setCurrentID }) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const post = useSelector((state) =>
    currentID ? state.posts.find((p) => p._id === currentID) : null
  );
  const [postData, setPostData] = useState({
    creater: "",
    title: "",
    message: "",
    tags: "",
    image: "",
  });
  const clear = () => {
    setCurrentID(null);
    setPostData({
      creater: "",
      title: "",
      message: "",
      tags: "",
      image: "",
    });
  };
  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentID) {
      dispatch(updatePost(currentID, postData));
    } else {
      dispatch(createPost(postData));
    }

    clear();
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setPostData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="false"
        noValidate
        className={`${classes.form} ${classes.root}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {currentID ? "Editing" : "Creating"} a Card
        </Typography>
        <TextField
          name="creater"
          variant="outlined"
          label="Creater"
          fullWidth
          value={postData.creater}
          onChange={handleChange}
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={handleChange}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          value={postData.message}
          onChange={handleChange}
        />

        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={(e) =>
            setPostData({ ...postData, tags: e.target.value.split(",") })
          }
        />
        <div className={classes.fileInput}>
          <FileBase
            className={classes.fileInput}
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData((prevData) => ({ ...prevData, image: base64 }))
            }
          />
        </div>
        <Button
          disabled={
            postData.creater === "" ||
            postData.message === "" ||
            postData.title === ""
              ? true
              : false
          }
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
}
