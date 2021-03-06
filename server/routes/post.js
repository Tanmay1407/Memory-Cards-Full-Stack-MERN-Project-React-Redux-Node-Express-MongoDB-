import express, { Router } from "express";
import {
  createPost,
  getPost,
  updatePost,
  deletePost,
} from "../controllers/post.js";
const router = express.Router();

router.get("/", getPost);
router.post("/", createPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);

export default router;
