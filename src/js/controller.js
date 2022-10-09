import * as model from './model';
import RecipeView from './views/recipeView';

import recipeView from './views/recipeView';

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const showRecipe = async () => {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;
    RecipeView.renderSpinner();

    // 1) Loading recipe

    await model.loadRecipe(id);

    // 2) Render recipe
    RecipeView.render(model.state.recipe);
  } catch (err) {
    console.log(err);
  }
};

showRecipe();

['hashchange', 'load'].forEach(event => {
  window.addEventListener(event, recipeView.render(model.state.recipe));
});
