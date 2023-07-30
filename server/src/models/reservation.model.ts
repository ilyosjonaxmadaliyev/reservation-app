import mongoose, { ObjectId, Schema } from "mongoose";
export enum EStatus {
  pending = "pending",
  canceled = "canceled",
  confirmed = "confirmed",
}
export interface IReservation {
  restaurant_id: ObjectId;
  user_id: ObjectId;
  reserve_time: number;
  people_count: number;
  note?: string;
  status: EStatus.pending | EStatus.canceled | EStatus.confirmed;
}

const reservationSchema = new Schema<IReservation>(
  {
    restaurant_id: {
      ref: "restaurant",
      type: Schema.Types.ObjectId,
    },
    user_id: {
      ref: "user",
      type: Schema.Types.ObjectId,
    },
    reserve_time: Date,
    people_count: Number,
    note: String,
    status: String,
  },
  {
    timestamps: true,
  }
);

const ReservationModel = mongoose.model<IReservation>(
  "reservation",
  reservationSchema
);

export default ReservationModel;
