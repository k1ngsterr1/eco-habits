import React, { useState } from "react";
import { View } from "react-native";
import { Layout } from "@app/layouts/layout";
import DotIndicator from "@shared/ui/DotIndicator/dot-indicator";
import MyTouchableOpacity from "@shared/ui/MyTouchableOpacity/my-touchable-opacity";
import Text from "@shared/ui/Text/text";
import TreeIcon from "@shared/ui/Icons/tree-icon";

export const SurveyScreen = () => {
  return (
    <Layout>
      <Text className="text-4xl text-dark font-bold">
        Help Us Tailor Your
        <Text className="text-main font-bold">Eco Plan!</Text>
      </Text>
      <View className="w-[280px] h-[200px] border-main border-[1px] rounded-lg flex flex-col items-center justify-center">
        <TreeIcon />
        <Text className="text-base text-dark text-center">
          Let's start by learning more about your habit
        </Text>
      </View>
    </Layout>
  );
};
