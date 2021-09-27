import { StyleSheet } from "react-native";
import { theme } from "../../Global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: 64,
    height: 64,
    borderRadius: 8,
    backgroundColor: theme.colors.discord,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: "hidden",
    marginRight: 20
  },
  image: {
    width: 64,
    height: 64,
  }
});