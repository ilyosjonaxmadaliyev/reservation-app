import mongoose, { Schema } from "mongoose";

export interface IMenu {
  title: string;
  imageURL: string;
  price: number;
}

export interface IRestaurant {
  title: string;
  desc: string;
  open_time: string;
  close_time: string;
  photos: string[];
  rating: number;
  address: string;
  latLng: {
    type: string;
    coordinates: [number, number];
  };
  menu: IMenu[];
}
const restaurantSchema = new Schema<IRestaurant>(
  {
    title: {
      type: String,
      required: true,
    },
    desc: String,
    open_time: String,
    close_time: String,
    rating: Number,
    address: String,
    photos: [String],
    latLng: {
      type: {
        type: String, // Don't do `{ location: { type: String } }`
        enum: ["Point"], // 'location.type' must be 'Point'
      },
      coordinates: {
        type: [Number],
      },
    },
    menu: [
      {
        title: String,
        imageURL: String,
        price: Number,
      },
    ],
  },
  {
    timestamps: true,
  }
);
const restaurantModel = mongoose.model<IRestaurant>(
  "restaurant",
  restaurantSchema
);
export default restaurantModel;
