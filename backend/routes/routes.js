import express from "express";
import { createRecipe } from "../controller/recipeController.js";

const router = express.Router();

router.post("/", createRecipe);

export default router;
