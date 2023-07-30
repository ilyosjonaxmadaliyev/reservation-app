import mongoose, { Schema } from "mongoose";

export interface Iuser {
  first_name: string;
  last_name: string;
  phone: string;
  address?: string;
  password: string;
  photoURL: string;
  latLng: {
    type: string;
    coordinates: [number, number];
  };
}
const userSchema = new Schema<Iuser>(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: String,
    phone: String,
    address: String,
    password: String,
    photoURL: String,
    latLng: {
      type: {
        type: String,
        enum: ["Point"],
      },
      coordinates: {
        type: [Number],
      },
    },
  },
  {
    timestamps: true,
  }
);
const userModel = mongoose.model<Iuser>("user", userSchema);
export default userModel;
