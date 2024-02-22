import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";

function renderCategoryItem(item) {}
function CategoriesScreen() {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
    />
  );
}
export default CategoriesScreen;
