import { StartScreen } from "@app/screens/StartScreen/start-screen";
import { SurveyScreen } from "@app/screens/SurveyScreen/survey-screen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// screens

const Stack = createNativeStackNavigator();

export const AuthStack = () => (
  <Stack.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName="Start"
  >
    <Stack.Screen name="Start" component={StartScreen} />
    <Stack.Screen name="Survey" component={SurveyScreen} />
  </Stack.Navigator>
);
