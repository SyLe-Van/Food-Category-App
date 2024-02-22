import { useContext } from "react";
import MealsList from "../components/MealsList/MealsList";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
function FavoritesScreen() {
  const favoriteMealsContext = useContext(FavoritesContext);
  const favoritesMeals = MEALS.filter((meal) =>
    favoriteMealsContext.ids.includes(meal.id)
  );
  return <MealsList items={favoritesMeals} />;
}
export default FavoritesScreen;
