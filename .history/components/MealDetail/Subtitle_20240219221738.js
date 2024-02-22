import { View, Text, StyleSheet } from "react-native";
function SubTitle() {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subTitle}>Steps</Text>
    </View>
  );
}
export default SubTitle;

const styles = StyleSheet.create({
  subTitle: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },

  subtitleContainer: {
    padding: 6,
    borderBottomWidth: 2,
    borderBottomColor: "#e2b497",
    marginVertical: 4,
    marginHorizontal: 24,
  },
});
