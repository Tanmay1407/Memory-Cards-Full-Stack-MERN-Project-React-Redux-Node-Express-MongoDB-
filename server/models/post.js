import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creater: String,
  tags: [String],
  image: String,
  likesCount: {
    type: Number,
    default: 0,
  },
  createOn: {
    type: Date,
    default: new Date(),
  },
});

const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
