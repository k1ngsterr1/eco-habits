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
      <View className="h-[80vh] relative flex items-center justify-start">
        <Text className="text-3xl text-dark text-center font-bold w-[280px]">
          Help Us Tailor Your
          <Text className="text-main font-bold"> Eco Plan!</Text>
        </Text>
        <View className="w-[280px] h-[200px] border-main border-[1px] rounded-2xl flex flex-col items-center justify-center mt-8">
          <TreeIcon />
          <Text className="text-base text-dark text-center">
            Let's start by learning more about your habit
          </Text>
        </View>
        <MyTouchableOpacity className="w-[270px] m-auto absolute bottom-4 h-[50px] bg-main flex items-center justify-center rounded-full">
          <Text className="text-white">Take the Survey</Text>
        </MyTouchableOpacity>
      </View>
    </Layout>
  );
};
