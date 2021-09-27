import { Inter_500Medium } from "@expo-google-fonts/inter";
import React from "react";
import { View, Text } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { categories } from "../../utils/categories";
import { GuildIcon } from "../GuildIcon";

import { styles } from "./styles";
import PlayerSVG from "../../assets/player.svg";
import CalendarSVG from "../../assets/calendar.svg";

import { theme } from "../../Global/styles/theme";

export type GuildProps = {
  id: string;
  name: string;
  icon: null;
  owner: boolean;
};

export type AppointmentProps = {
  id: string;
  guild: GuildProps;
  category: string;
  date: string;
  description: string;
};

type Props = RectButtonProps & {
  data: AppointmentProps;
};

const Appointment = ({ data, ...rest }: Props) => {
  const [category] = categories.filter(
    (item) => item.id.toString() === data.category
  );
  const { owner } = data.guild;
  const { primary, on } = theme.colors;

  return (
    <RectButton {...rest}>
      <View style={styles.container}>
        <GuildIcon iconId={data.guild.icon} guildId={data.guild.id}/>
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>{data.guild.name}</Text>
            <Text style={styles.category}>{category.title}</Text>
          </View>

          <View style={styles.footer}>
            <View style={styles.dateInfo}>
              <CalendarSVG />
              <Text style={styles.date}>{data.date}</Text>
            </View>

            <View style={styles.playersInfo}>
              <PlayerSVG fill={owner ? primary : on} />
              <Text style={[styles.player, { color: owner ? primary : on }]}>
                {owner ? "Anfitrião" : "Visitante"}
              </Text>
            </View>
          </View>

        </View>
      </View>
    </RectButton>
  );
};

export { Appointment };
