import TreeIcon from "@shared/ui/Icons/tree-icon";
import { NameTab } from "@shared/ui/NameTab/name-tab";
import Text from "@shared/ui/Text/text";
import React from "react";
import {
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  View,
  ScrollView,
} from "react-native";

interface ILayout {
  children: React.ReactNode;
  isTab?: boolean;
  isHeader?: boolean;
  isNotification?: boolean;
  isPlan?: boolean;
  isLogo?: boolean;
}

export const Layout: React.FC<ILayout> = ({
  children,
  isTab,
  isHeader,
  isLogo,
  isNotification,
  isPlan,
}) => {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView
        contentContainerStyle={{ paddingBottom: isTab ? 80 : 0 }}
        className="flex-1 bg-white"
      >
        {isLogo && (
          <View className="w-full flex items-center justify-center mt-12">
            <Text className="text-dark text-xl">
              <Text className="text-main">Eco</Text>Habits
            </Text>
          </View>
        )}
        {isHeader && (
          <View className="w-[400px] m-auto flex flex-row items-center justify-between">
            <View className="flex items-center justify-center bg-inactive p-2 w-[48px] h-[48px] rounded-xl">
              <TreeIcon width={22} height={27} />
            </View>
            <NameTab />
          </View>
        )}
        <View className="flex flex-col items-center justify-center  px-4">
          {children}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
