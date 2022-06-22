import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import {
  UIButton,
  UIText,
  UIListItem,
  UICard,
  UIInput,
  UIButtonGroup,
  UIDivider,
  UIModal,
  UICircleButton,
} from "./ui-components/index";

import "./global.js";

import HomeScreen from "./screens/HomeScreen";
import TextScreen from "./screens/TextScreen";
import ButtonScreen from "./screens/ButtonScreen";
import ButtonGroupScreen from "./screens/ButtonGroupScreen";
import CardScreen from "./screens/CardScreen";
import ListItemScreen from "./screens/ListItemScreen";
import InputScreen from "./screens/InputScreen";
import SignInScreen from "./screens/SignInScreen";
import SignUpScreen1 from "./screens/SignUpScreen1";
import SignUpScreen2 from "./screens/SignUpScreen2";
import ForgotPasswordScreen from "./screens/ForgotPasswordScreen";

export default function App() {
  const Stack = createStackNavigator();

  let [fontsLoaded] = useFonts({
    "Nunito-Regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "Nunito-Bold": require("./assets/fonts/Nunito-Bold.ttf"),
  });

  if (!fontsLoaded) return <View />;

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          ...TransitionPresets.SlideFromRightIOS,
          headerShown: false,
          gestureEnabled: true,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Text" component={TextScreen} />
        <Stack.Screen name="Button" component={ButtonScreen} />
        <Stack.Screen name="Button Group" component={ButtonGroupScreen} />
        <Stack.Screen name="Card" component={CardScreen} />
        <Stack.Screen name="List Item" component={ListItemScreen} />
        <Stack.Screen name="Input" component={InputScreen} />
        <Stack.Screen name="Sign In" component={SignInScreen} />
        <Stack.Screen name="Sign Up 1" component={SignUpScreen1} />
        <Stack.Screen name="Sign Up 2" component={SignUpScreen2} />
        <Stack.Screen name="Forgot Password" component={ForgotPasswordScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
