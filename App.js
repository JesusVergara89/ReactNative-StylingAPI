import { View, Text, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>

      <View style={[styles.box, styles.backGroundCb]}>
        <Text style={styles.title}>Style sheet API</Text>
      </View>

      <View style={[styles.box, styles.backGroundCa]}>
        <Text style={styles.title}>Style sheet API</Text>
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "lightblue",
    padding: 10,
    marginTop: 50
  },

  box: {
     width: "100%",
     height: 100,
     paddingVertical: 10,
     marginVertical: 10,
     borderWidth: 2,
     borderColor: "pink",
     borderRadius: 10
  },

  backGroundCb: {
    backgroundColor: "blue"
  },

  backGroundCa: {
    backgroundColor: "yellow"
  },

  title: {
    fontSize: 15,
    color: "red"
  }
})