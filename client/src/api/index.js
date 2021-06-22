import axios from "axios";

const url = "https://memory-cards-project.herokuapp.com/post";

export const fetchPosts = () => {
  return axios.get(url);
};

export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, updatePost) =>
  axios.patch(`${url}/${id}`, updatePost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
