import { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import MealsList from "../components/MealsList/MealsList";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
function FavoritesScreen() {
  const favoriteMealsContext = useContext(FavoritesContext);
  const favoritesMeals = MEALS.filter((meal) =>
    favoriteMealsContext.ids.includes(meal.id)
  );
  if (favoritesMeals.length === 0) {
    return (
      <View>
        <Text style={styles.favEmpty}>Nothing!</Text>
      </View>
    );
  }
  return <MealsList items={favoritesMeals} />;
}
export default FavoritesScreen;

const styles = StyleSheet.create({
  favEmpty: {
    fontSize: 24,
    color: "white",
  },
});
