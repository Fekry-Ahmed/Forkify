import * as model from './model';
import RecipeView from './views/recipeView';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import recipeView from './views/recipeView';

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const showRecipe = async () => {
  try {
    // const id = window.location.hash.slice(1);
    const id = '5ed6604591c37cdc054bc886?';

    if (!id) return;
    RecipeView.renderSpinner();

    // 1) Loading recipe

    await model.loadRecipe(id);

    // 2) Render recipe
    RecipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
  }
};

const init = () => {
  recipeView.addHandlerRender(showRecipe);
};
init();

export default showRecipe;
