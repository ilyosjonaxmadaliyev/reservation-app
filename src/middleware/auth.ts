import { ObjectId } from "mongoose";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export interface customRequest extends Request {
  userId: ObjectId;
}
export default (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.token;
  if (token) {
    try {
      const payload = jwt.verify(token, "secret");
      (req as customRequest).userId = (payload as { id: ObjectId }).id;
    } catch (error: any) {
      return res.status(403).send({ message: error.message });
    }
  } else {
    return res.status(403).send({ message: "token not found" });
  }
  next();
};
