import { createReservation } from "../controller/reservation.controller";
import express from "express";

const reservationRouter = express.Router();

reservationRouter.get("/");
reservationRouter.post("/", createReservation);

export default reservationRouter;
