import { StyleSheet } from "react-native";

import { theme } from "../../Global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  user: {
    flexDirection: "row",
  },
  greeting: {
    fontFamily: theme.fonts.title500,
    fontSize: 24,
    color: theme.colors.heading,
    marginRight: 5,
  },
  username: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
    fontSize: 24,
  },
  message: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.text400,
  },
});
