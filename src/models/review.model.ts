import mongoose, { ObjectId, Schema } from "mongoose";

export interface IReview {
  rating: number;
  comment: string;
  restaurant_id: ObjectId;
  user_id: ObjectId;
  first_name: string;
  last_name: string;
  photoURL: string;
}

const reviewSchema = new Schema<IReview>(
  {
    rating: {
      type: Number,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    restaurant_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "restaurant",
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    first_name: String,
    last_name: String,
    photoURL: String,
  },
  {
    timestamps: true,
  }
);

const reviewModel = mongoose.model<IReview>("review", reviewSchema);
export default reviewModel;
