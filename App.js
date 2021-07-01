
import React, { useReducer } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const number = 1;

const reducer = (state, action) => {

  switch (action.type) {
    case "red":
      return { ...state, red: state.red + number }
    case "green":
      return { ...state, green: state.green + number }
    case "blue":
      return { ...state, blue: state.blue + number }
    default:
      return state;
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 })
  const { red, green, blue } = state
  console.log(red, green, blue);

  return (
    <View style={{ flex: 1, backgroundColor: `rgb(${red},${green},${blue})` }}>
      <View style={styles.innerContainer}>
        {
          red + number <= 255 ?
            <TouchableOpacity
              style={[styles.Btns, { backgroundColor: "#D82E2F" }]}
              onPress={() => { dispatch({ type: "red" }) }}
            >
              <Text>Red</Text>
            </TouchableOpacity> :
            <TouchableOpacity
              style={[styles.Btns, { backgroundColor: "#D82E2F" }]}
              disabled={true}
              onPress={() => { dispatch({ type: "red" }) }}
            >
              <Text>Max Value Reached</Text>
            </TouchableOpacity>
        }
        {
          green + number <= 255 ?
            <TouchableOpacity
              style={[styles.Btns, { backgroundColor: "#6EC72D" }]}
              onPress={() => { dispatch({ type: "green" }) }}
            >
              <Text>Green</Text>
            </TouchableOpacity> :
            <TouchableOpacity
              disabled={true}
              style={[styles.Btns, { backgroundColor: "#6EC72D" }]}
              onPress={() => { dispatch({ type: "green" }) }}
            >
              <Text>Max Value Reached</Text>
            </TouchableOpacity>
        }
        {
          blue + number <= 255 ?
            <TouchableOpacity
              style={[styles.Btns, { backgroundColor: "#1B98F5" }]}
              onPress={() => { dispatch({ type: "blue" }) }}
            >
              <Text>Blue</Text>
            </TouchableOpacity> :
            <TouchableOpacity
              disabled={true}
              style={[styles.Btns, { backgroundColor: "#1B98F5" }]}
              onPress={() => { dispatch({ type: "blue" }) }}
            >
              <Text>Max Value Reached </Text>
            </TouchableOpacity>
        }
        <Text style={styles.val}>Current RGB Value : {red} , {green} , {blue}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  innerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  Btns: {
    height: "10%",
    padding: 10,
    margin: 20,
    width: "80%",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    fontWeight: "700",
  },
  val: {
    width: "100 %",
    fontSize: 20,
    fontStyle: "italic",
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
});

export default App;
