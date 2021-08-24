import { Router } from "express";
import * as reviewsHandlers from "./handlers.js";

const route = Router();
route.get("/", reviewsHandlers.list);
export default route;