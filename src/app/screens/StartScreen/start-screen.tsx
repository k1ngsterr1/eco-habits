import React, { useState } from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation
import { Layout } from "@app/layouts/layout";
import DotIndicator from "@shared/ui/DotIndicator/dot-indicator";
import MyTouchableOpacity from "@shared/ui/MyTouchableOpacity/my-touchable-opacity";
import Text from "@shared/ui/Text/text";

const texts = [
  {
    title: "Track Your Habits",
    description:
      "Easily monitor your progress on eco-friendly habits and see how your actions impact the planet.",
  },
  {
    title: "Join Community Challenges",
    description:
      "Participate in monthly challenges with friends and make sustainable living a fun experience!",
  },
  {
    title: "Access Educational Resources",
    description:
      "Discover articles, videos, and tips to enhance your understanding of sustainability.",
  },
  {
    title: "Earn Rewards",
    description:
      "Complete habits and earn points that you can redeem for discounts and eco-friendly resources!",
  },
];

export const StartScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigation = useNavigation(); // Get the navigation object

  const handleNext = () => {
    if (currentIndex === texts.length - 1) {
      navigation.navigate("Survey"); // Navigate to SurveyScreen on last slide
    } else {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <Layout isLogo>
      <View className="h-[80vh] relative flex items-center justify-center">
        <Text className="text-2xl font-bold text-main text-center">
          {texts[currentIndex].title}
        </Text>
        <Text className="text-base text-center mt-2">
          {texts[currentIndex].description}
        </Text>
        <MyTouchableOpacity
          className="w-[270px] m-auto absolute bottom-4 h-[50px] bg-main flex items-center justify-center rounded-full"
          onPress={handleNext}
        >
          <Text className="text-white">
            {currentIndex === texts.length - 1 ? "GO TO SURVEY" : "NEXT"}
          </Text>
        </MyTouchableOpacity>
        <DotIndicator totalDots={texts.length} currentIndex={currentIndex} />
      </View>
    </Layout>
  );
};
