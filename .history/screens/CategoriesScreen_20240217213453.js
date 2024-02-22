import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridItem from "../components/CategoryGridTitle";
function renderCategoryItem(itemData) {
  function pressHandler() {}
  return (
    <CategoryGridItem
      title={itemData.item.title}
      color={itemData.item.color}
      onPress={pressHandler}
    />
  );
}
function CategoriesScreen() {
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
