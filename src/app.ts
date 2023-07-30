import express from "express";
import restaurantRouter from "./routes/restaurant.routes";

import cookieParser from "cookie-parser";
import userRouter from "./routes/user.routes";
import auth from "./middleware/auth";
import reservationRouter from "./routes/reservation.routes";
import reviewRouter from "./routes/review.routes";

const app = express();

app.use(express.json());

app.use(cookieParser());

app.use("/restaurant", auth, restaurantRouter);

app.use("/reservation", auth, reservationRouter);

app.use("/review", auth, reviewRouter);

app.use("/user", userRouter);

export default app;
