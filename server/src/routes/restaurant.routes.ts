import {
  createMenuItem,
  createRestaurant,
  deleteMenuItem,
  deleteRestaurant,
  getRestaurants,
  updateMenuItem,
  updateRestaurant,
} from "./../controller/restaurant.controller";
import express from "express";

const restaurantRouter = express.Router();

restaurantRouter.get("/all", getRestaurants);
restaurantRouter.post("/add", createRestaurant);
restaurantRouter.patch("/:id", updateRestaurant);
restaurantRouter.delete("/:id", deleteRestaurant);

// for menu
restaurantRouter.post("/:restaurantId/menu/", createMenuItem);
restaurantRouter.patch("/:restaurantId/menu/:menuId", updateMenuItem);
restaurantRouter.delete("/:restaurantId/menu/:menuId", deleteMenuItem);

export default restaurantRouter;
