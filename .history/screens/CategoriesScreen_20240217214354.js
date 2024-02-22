import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridItem from "../components/CategoryGridTitle";

function CategoriesScreen({ navigation }) {
  function renderCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate("MealsOverview");
    }
    return (
      <CategoryGridItem
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}
export default CategoriesScreen;
