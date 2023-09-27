import React, { Component } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Button from "./Components/Boton";
import Row from "./Components/Fila";
import calculator, { initialState } from "./Components/Calculadora";

export default class App extends Component {
    state = initialState;

  // handle tap method
  HandleTap = (type, value) => {
    this.setState((state) => calculator(type, value, state));
  };

  // render method
  render(){
    return (
      <View style={styles.container}>
        {/* Status bae here */}

        <SafeAreaView>
        <Text style={styles.value}>
            {parseFloat(this.state.currentValue).toLocaleString()}
          </Text>

          {/* Do create componentRow */}
          <Row>
            <Button
              text="C"
              size="bigger"
             
              onPress={() => this.HandleTap("clear")}
            />

            <Button
              text="/"
              type="gray"
              onPress={() => this.HandleTap("operator", "/")}
            />
          </Row>

          <Row>
            <Button text="7" onPress={() => this.HandleTap("number", 7)} />
            <Button text="8" onPress={() => this.HandleTap("number", 8)} />
            <Button text="9" onPress={() => this.HandleTap("number", 9)} />
            <Button text="X" type="gray" onPress={() => this.HandleTap("operator", "*")}
            />
          </Row>

          <Row>
            <Button text="4" onPress={() => this.HandleTap("number", 4)} />
            <Button text="5" onPress={() => this.HandleTap("number", 5)} />
            <Button text="6" onPress={() => this.HandleTap("number", 6)} />
            <Button
              text="-"
              type="gray"
              onPress={() => this.HandleTap("operator", "-")}
            />
          </Row>

          <Row>
            <Button text="1" onPress={() => this.HandleTap("number", 1)} />
            <Button text="2" onPress={() => this.HandleTap("number", 2)} />
            <Button text="3" onPress={() => this.HandleTap("number", 3)} />
            <Button
              text="+"
              type="gray"
              onPress={() => this.HandleTap("operator", "+")}
            />
          </Row>

          <Row>
            <Button text="0" size="big" onPress={() => this.HandleTap("number", 0)} />
            <Button text="." onPress={() => this.HandleTap("number", ".")} />
            <Button
              text="="
              type="equal"
              onPress={() => this.HandleTap("equal", "=")}
            />
          </Row>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E4F0F0",
    justifyContent: "flex-end",
    
  },
  value: {
    color: "black",
    fontSize: 42,
    textAlign: "right",
    marginRight: 5,
    marginLeft: 5,
    marginBottom: 10,
    backgroundColor: "#E9EE6A",
    paddingRight: 10,
  },
  column: {
    flexDirection: "column",
    color: "black",
    fontSize: 42,
    textAlign: "right",
    marginRight: 5,
    marginLeft: 5,
    marginBottom: 10,
    paddingRight: 10,
   
  }
});