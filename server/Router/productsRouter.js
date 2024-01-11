import express from "express";
import { DeleteFlower, GetAllFlowers, PostFlowers } from "../Controllers/ProductsController.js";

export const ProductRouter = express.Router();
ProductRouter.get("/", GetAllFlowers)
ProductRouter.post("/", PostFlowers)
ProductRouter.delete("/:id", DeleteFlower)

