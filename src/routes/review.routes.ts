import express from "express";
import {
  createReview,
  deleteReview,
  getReviews,
  updateReview,
} from "../controller/review.controller";

const reviewRouter = express.Router();

reviewRouter.get("/", getReviews);
reviewRouter.post("/", createReview);
reviewRouter.patch("/:id", updateReview);
reviewRouter.delete("/:id", deleteReview);

export default reviewRouter;
