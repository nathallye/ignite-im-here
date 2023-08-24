import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",

    backgroundColor: "#1F1E25",
    borderRadius: 5,

    width: "100%",
    marginBottom: 10
  },
  name: {
    flex: 1,

    marginLeft: 16,
    
    color: "#FFF",
    fontSize: 16
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    
    backgroundColor: "#E23C44",
    borderRadius: 5,

    width: 56,
    height: 56
  },
  buttonText: {
    color: "#FFF",
    fontSize: 24
  }
});