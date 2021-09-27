import React from "react";
import { View, ActivityIndicator } from "react-native";
import { theme } from "../../Global/styles/theme";

import { styles } from "./styles";

const Load = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={theme.colors.primary} />
    </View>
  );
};

export { Load };
