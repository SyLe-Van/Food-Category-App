import { Pressable, View, Text } from "react-native";

function CategoryGridItem({ title, color }) {
  return (
    <View>
      <Pressable>
        <View>
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}
export default CategoryGridItem;
