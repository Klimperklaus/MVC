import Recipe from "../models/recipe.js";

export async function createRecipe(res, req) {
  try {
    const recipe = new Recipe({
      title: req.body.title,
      ingrediants: req.body.ingrediants,
      preparation: req.body.preparation,
    });
    await recipe
      .save()
      .then(() => "recipe saved !")
      .catch((err) => console.log(err));

    res.send(recipe);
  } catch (err) {
    console.log(err);
  }
}
