import { View, Text, Image } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
function MealDetailScreen({ route, duration, complexity, affordability }) {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  return (
    <View>
      <Image source={{ uri: selectedMeal.imageUrl }} />
      <Text>{selectedMeal.title}</Text>
      <View>
        <MealDetails
          duration={duration}
          complexity={complexity}
          affordability={affordability}
        />
      </View>
      <Text>Ingredients</Text>
      <Text>Steps</Text>
    </View>
  );
}
export default MealDetailScreen;
