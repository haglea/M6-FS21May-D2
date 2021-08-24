import { Router } from "express";
import * as reviewsHandlers from "./handlers.js";

const route = Router();

route.get("/", reviewsHandlers.list);
route.post("/", reviewsHandlers.create);
route.get("/:review_id", reviewsHandlers.single);
route.put("/:review_id", reviewsHandlers.update);
route.delete("/:review_id", reviewsHandlers.deleteReview);

export default route;