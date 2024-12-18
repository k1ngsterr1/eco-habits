import React from "react";
import { View } from "react-native";
import Text from "../Text/text";

export const NameTab = () => {
  return (
    <View className="flex flex-col items-end">
      <Text className="text-[20px] text-dark font-bold">Good Morning</Text>
      <Text className="text-[14px] text-dark">Ruslan Makhmatov</Text>
    </View>
  );
};
