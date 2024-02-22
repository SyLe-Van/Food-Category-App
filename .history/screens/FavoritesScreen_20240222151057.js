import { useContext } from "react";
import MealsList from "../components/MealsList/MealsList";
import { FavoritesContext } from "../store/context/favorites-context";
function FavoritesScreen() {
  const favoriteMealsContext = useContext(FavoritesContext);
  return <MealsList />;
}
export default FavoritesScreen;
