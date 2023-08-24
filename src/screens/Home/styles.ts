import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    
    padding: 24
  },
  eventName: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "bold",

    marginTop: 48
  },
  eventDate: {
    color: "#6B6B6B",
    fontSize: 16
  },
  input: {
    backgroundColor: "#1F1E25",
    borderRadius: 5,
    
    height: 56,
    marginTop: 16,
    padding: 16,

    color: "#FFF",
    fontSize: 16
  },
  button: {
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "#31CF67",
    borderRadius: 5,

    width: 56,
    height: 56
  },
  buttonText: {
    color: "#FFF",
    fontSize: 24
  }
});