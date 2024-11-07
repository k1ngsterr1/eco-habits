import React from "react";
import { View } from "react-native";

interface DotIndicatorProps {
  totalDots: number;
  currentIndex: number;
}

const DotIndicator: React.FC<DotIndicatorProps> = ({
  totalDots,
  currentIndex,
}) => {
  return (
    <View className="flex-row justify-center mb-4 absolute bottom-16">
      {Array.from({ length: totalDots }).map((_, index) => (
        <View
          key={index}
          className={`w-2 h-2 rounded-full mx-1 ${
            index === currentIndex ? "bg-[#02B598]" : "bg-[#BAFFF3] opacity-50"
          }`}
        />
      ))}
    </View>
  );
};

export default DotIndicator;
