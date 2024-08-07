import { View, Text, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Style sheet API</Text>
    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "lightblue",
    padding: 60
  },

  title: {
    fontSize: 15,
    color: "red"
  }
})