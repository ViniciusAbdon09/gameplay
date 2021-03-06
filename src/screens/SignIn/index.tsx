import React from "react";
import { View, Text, Image, Alert, ActivityIndicator } from "react-native";

import IllustrationImg from "../../assets/illustration.png";
import { Background } from "../../components/Background";
import { ButtonIcon } from "../../components/ButtonIcon";
import { theme } from "../../Global/styles/theme";

import { useAuth } from "../../hooks/auth";

import { styles } from "./styles";

const SignIn = () => {
  const { loading, signIn } = useAuth();

  async function handleSignIn() {
    try {
      await signIn();
    } catch (e: any) {
      Alert.alert(e);
    }
  }

  return (
    <Background>
      <View style={styles.container}>
        <Image
          source={IllustrationImg}
          style={styles.image}
          resizeMode="stretch"
        />
        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se {"\n"}e organize suas {"\n"}
            jogatinas
          </Text>
          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games {"\n"}
            favoritos com seus amigos
          </Text>

          {loading ? (
            <ActivityIndicator color={theme.colors.primary} />
          ) : (
            <ButtonIcon title="Entre com o Discord" onPress={handleSignIn} />
          )}
        </View>
      </View>
    </Background>
  );
};

export { SignIn };
