import { Dimensions, StyleSheet, Text, TouchableOpacity } from "react-native";

 const Button = ({ onPress, text, size, type }) => {
  const buttonStyles = [styles.button];
  const textStyles = [styles.text];

  if (size === "big") {
    buttonStyles.push(styles.buttonBig);
  }

   if (size === "bigger") {
    buttonStyles.push(styles.buttonBigger);
  }

  if (type === "gray") {
    buttonStyles.push(styles.buttonGray);
    textStyles.push(styles.textGray);
  }
  
  if (type === "equal") {
    buttonStyles.push(styles.buttonEqual);
    textStyles.push(styles.textB);
  }



  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles}>
      <Text style={textStyles}>{text}</Text>
    </TouchableOpacity>
  );
};

const screen = Dimensions.get("window");
const buttonWidth = screen.width /5;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#333333",
    flex: 1,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    margin: 4,
  },
  text: {
    color: "#fff",
    fontSize: 24,
  },
  textGray: {
    color: "#060606",
  },
  buttonBig: {
    flex: 2,
    alignItems: "center",
  },
  buttonBigger: {
    flex: 3,
    backgroundColor: "#D67C10",
  },
  buttonGray: {
    backgroundColor: "#a6a6a6",
  },
  buttonEqual: {
    backgroundColor: "#0A990C",
    flex: 1,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    margin: 4,
  }
});
export default Button;