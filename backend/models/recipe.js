import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "No title given !"],
  },
  ingredients: {
    type: Object,
    required: [true, "No ingredients given !"],
  },
  preparation: {
    type: String,
    required: [true, "No preparation given !"],
  },
});

const Recipe = mongoose.model("Recipe", recipeSchema);

export default Recipe;
