import React, { Children, ReactNode } from "react";
import { LinearGradient } from "expo-linear-gradient";

import { styles } from "./styles";
import { theme } from "../../Global/styles/theme";

type Props = {
  children: ReactNode;
};

const Background = ({ children }: Props) => {
  const { secondary80, secondary100 } = theme.colors;

  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary80, secondary100]}
    >
      {children}
    </LinearGradient>
  );
};

export { Background };
