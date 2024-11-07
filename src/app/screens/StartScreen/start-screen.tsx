import { Layout } from "@app/layouts/layout";
import Text from "@shared/ui/Text/text";
import React from "react";

export const StartScreen = () => {
  return (
    <Layout isLogo>
      <Text className="text-2xl font-bold text-main text-center">
        Track Your Habits
      </Text>
      <Text className="text-base text-center mt-4 text-dark">
        Easily monitor your progress on eco-friendly habits and see how your
        actions impact the planet.
      </Text>
    </Layout>
  );
};
