import { View, Text } from "react-native";
function MealDetailScreen({ route }) {
  const mealId = route.params.mealId;
  return (
    <View>
      <Text>Meal Detail - {mealId}</Text>
    </View>
  );
}
export default MealDetailScreen;
