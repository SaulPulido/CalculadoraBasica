import { StyleSheet, View } from "react-native";

const Column = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

// create styles of Row
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
});

export default Column;