//defined all routes
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AppRouter } from "./app.routes";
import { useAuth } from "../hooks/auth";
import { SignIn } from "../screens/SignIn";

const Routes = () => {
  const {user} = useAuth();

  return (
    <NavigationContainer>
      {user.id ? <AppRouter /> : <SignIn/>}
    </NavigationContainer>
  );
};

export { Routes };

//NavigationContainer é o responsavel pelo roteamento e controle das rotas
