import { MEALS } from "../data/dummy-data";
import { View, Text, StyleSheet } from "react-native";
function MealsOverViewScreen() {
  return (
    <View style={styles.container}>
      <Text>Meals Overview Screen</Text>
    </View>
  );
}
export default MealsOverViewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
