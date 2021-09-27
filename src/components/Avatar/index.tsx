import React from "react";
import {Image} from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

import { styles } from "./styles";
import { theme } from "../../Global/styles/theme";

type Props = {
  urlImage: string;
}

const Avatar = ({urlImage}: Props) => {
  const { secondary50, secondary70 } = theme.colors;

  return (
    <LinearGradient
      colors={[secondary50, secondary70]}
      style={styles.container}
    >
      <Image source={{uri: urlImage}} style={styles.avatar}/>
    </LinearGradient>
  )
}

export {Avatar};