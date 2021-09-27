import React, { useState, useCallback } from "react";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { View, Text, FlatList } from "react-native";
import { Appointment, AppointmentProps } from "../../components/Appointment";
import { Background } from "../../components/Background";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { ListDivider } from "../../components/ListDivider";
import { ListHeader } from "../../components/ListHeader";

import { Profile } from "../../components/Profile";

import { styles } from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLLECTION_APPOINTMENTS } from "../../config/database";
import { Load } from "../../components/Load";

const Home = () => {
  const [category, setCategory] = useState("");
  const [appointments, setAppointments] = useState<AppointmentProps[]>([]);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  function handleCategorySelect(categoryId: string) {
    //essa função vai verificar se o componente já foi marcado e se ele estiver marcado ele ira desmarcar
    categoryId === category ? setCategory("") : setCategory(categoryId);
  }

  function handlerAppointmentDetails(guildSelected: AppointmentProps) {
    navigation.navigate("AppointmentDetails", { guildSelected });
  }

  function handlerAppointmentCreate() {
    navigation.navigate("AppointmentCreate");
  }

  async function loadAppointments() {
    const response = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);

    const storage: AppointmentProps[] = response ? JSON.parse(response) : [];

    if (category) {
      setAppointments(
        storage.filter((item) => item.category === category)
      ); //filtro por categoria
    } else {
      setAppointments(storage);
    }

    setLoading(false);
  }

  useFocusEffect(useCallback(() => {
    loadAppointments();
  }, [category]))

  return (
    <Background>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd onPress={handlerAppointmentCreate} />
      </View>

      <CategorySelect
        categorySelected={category}
        setCategory={handleCategorySelect}
      />

      { loading ? <Load /> :
        <>
          <ListHeader title="Partidas agendadas" subtitle={`Total ${appointments.length}`} />

          <FlatList
            data={appointments}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Appointment data={item} onPress={() => handlerAppointmentDetails(item)} />
            )}
            ItemSeparatorComponent={() => <ListDivider />}
            style={styles.matches}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 69 }}
          />
        </>
      }
    </Background>
  );
};

export { Home };
