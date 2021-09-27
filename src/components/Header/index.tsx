import React, { ReactNode } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { BorderlessButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

import { styles } from "./styles";
import { theme } from "../../Global/styles/theme";

type Props = {
  title: string;
  action?: ReactNode;
};

const Header = ({ title, action }: Props) => {
  const navigation = useNavigation();

  function handlerGoBack() {
    navigation.goBack();
  }

  const { secondary40, secondary100, heading } = theme.colors;
  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary100, secondary40]}
    >
      <BorderlessButton onPress={handlerGoBack}>
        <Feather name="arrow-left" size={24} color={heading} />
      </BorderlessButton>

      <Text style={styles.title}>{title}</Text>

      {action ? <View>{action}</View> : <View style={{ width: 24 }} />}
    </LinearGradient>
  );
};

export { Header };
