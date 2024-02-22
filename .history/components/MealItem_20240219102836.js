import { View, Text, Pressable, Image, StyleSheet } from "react-native";
function MealItem({ title }) {
  return (
    <View>
      <Pressable>
        <View>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  image: {
    height: "100%",
    width: 200,
  },
});
