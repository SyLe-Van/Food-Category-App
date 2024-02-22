import { Pressable, View, Text, StyleSheet } from "react-native";

function CategoryGridItem({ title, color }) {
  return (
    <View style={styles.gridItem}>
      <Pressable>
        <View>
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}
export default CategoryGridItem;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    alignItems: "center",
  },
});
