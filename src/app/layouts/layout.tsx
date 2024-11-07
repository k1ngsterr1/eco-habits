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
        <View className="w-full items-center justify-center mt-12">
          {isLogo && (
            <Text className="text-dark text-xl">
              <Text className="text-main">Eco</Text>Habits
            </Text>
          )}
        </View>
        <View className="flex-1 px-4">{children}</View>
      </ScrollView>
    </SafeAreaView>
  );
};
