import { getCocktailCards } from './favoriteCocktail';
import { renderGallery, renderButtons } from './renderGallery';

addEventListener('load', async () => {
  const data = await getCocktailCards();
  renderGallery(data);
  renderButtons(data);
});
