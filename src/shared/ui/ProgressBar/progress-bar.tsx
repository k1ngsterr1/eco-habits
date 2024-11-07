import React from "react";
import { View } from "react-native";

interface IProgress {
  progress: number;
}

const ProgressBar: React.FC<IProgress> = ({ progress }) => {
  return (
    <View className="w-full h-2 bg-inactive rounded-full">
      <View
        className="h-2 rounded-full bg-main"
        style={{ width: `${progress}%` }}
      />
    </View>
  );
};

export default ProgressBar;
