import { StyleSheet, Button } from "react-native";
import { colors } from "./constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  input: {
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 10,
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
  },
  buttonPrimary: {
    borderRadius: 10,
    height: 40,
    backgroundColor: "#1e90ff",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  buttonSecondory: {
    borderRadius: 10,
    height: 40,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#1e90ff",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  buttonTextSecondary: {
    color: "#000",
    fontWeight: "bold",
  },
  card: {
    // height:150,
    borderRadius: 20,
    margin: 20,
    padding: 30,
    backgroundColor: "#fff",
    shadowColor: "#ccc",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  lablel: {
    flex: 3,
    fontWeight: 'bold'
  },
  details: {
    flex:3
  },
  cardSection: {
    flexDirection: 'row',
    marginBottom: 20
  }
});
export default styles;
