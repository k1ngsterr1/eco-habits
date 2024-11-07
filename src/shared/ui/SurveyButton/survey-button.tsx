import React from "react";
import { View } from "react-native";
import MyTouchableOpacity from "../MyTouchableOpacity/my-touchable-opacity";

interface ISurveyButton {
  name: string;
}

export const SurveyButton: React.FC<ISurveyButton> = ({ name }) => {
  return (
    <MyTouchableOpacity className="w-[380px] h-[45px] border-[#DDDDDD] border-[1px] rounded-full">
      {name}
    </MyTouchableOpacity>
  );
};
