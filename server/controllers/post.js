import mongoose from "mongoose";
import PostMessage from "../models/post.js";

export const getPost = async (req, res) => {
  const postMessage = await PostMessage.find();
  res.status(200).json(postMessage);
};

export const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new PostMessage(post);
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No Post with that ID");

  const updatePost = await PostMessage.findByIdAndUpdate(
    _id,
    { ...post, _id },
    { new: true }
  );
  res.json(updatePost);
};

export const deletePost = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send("No Post with that ID");

    await PostMessage.findByIdAndDelete(id);

    res.json({ message: "Post deleted" });
  } catch (error) {
    console.log(error);
  }
};
