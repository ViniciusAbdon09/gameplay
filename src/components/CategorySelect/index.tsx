import React from "react";
import { ScrollView } from "react-native";

import { styles } from "./styles";
import { categories } from "../../utils/categories";
import { Category } from "../Category";

type Props = {
  categorySelected: string;
  setCategory: (categoryId: string) => void;
  hasCheckBox?: boolean;
};

const CategorySelect = ({ categorySelected, setCategory, hasCheckBox = false }: Props) => {
  return (
    <ScrollView
      style={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {categories.map((category) => (
        <Category
          key={category.id}
          title={category.title}
          icon={category.icon}
          checked={category.id.toString() === categorySelected}
          onPress={ () => setCategory(category.id.toString())}
          hasCheckBox={hasCheckBox}
        />
      ))}
    </ScrollView>
  );
};

export { CategorySelect };
