import { Text, View, StyleSheet } from "react-native";

function List({ data }) {
  return data.map((dataPoint) => (
    <View>
      <Text key={dataPoint}>{dataPoint}</Text>
    </View>
  ));
}

export default List;

const style = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#e2b497",
  },
});
