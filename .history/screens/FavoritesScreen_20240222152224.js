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
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorites meal yet.</Text>
      </View>
    );
  }
  return <MealsList items={favoritesMeals} />;
}
export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
