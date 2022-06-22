import React, { useState } from "react";
import { View } from "react-native";
import {
  UIBackgroundView,
  UIHeader,
  UIScrollView,
  UIInput,
  UIButton,
  UIText,
} from "../ui-components/index";

export default function SignInScreen2({ navigation }) {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <UIBackgroundView>
      <UIHeader navigation={navigation} />
      <UIScrollView>
        <View style={{ height: 50 }} />
        <UIText text="Almost there!" type="header" />
        <View style={{ height: 30 }} />
        <UIInput
          title="Username"
          icon="person"
          onChangeText={(text) => setUsername(text)}
        />
        <UIInput
          title="Password"
          icon={showPassword ? "eye-off-outline" : "eye-outline"}
          secureTextEntry={!showPassword}
          onIconPress={() => setShowPassword(!showPassword)}
          onChangeText={(text) => setPassword(text)}
        />
        <UIInput
          title="Confirm Password"
          icon={showPassword ? "eye-off-outline" : "eye-outline"}
          secureTextEntry={!showPassword}
          onIconPress={() => setShowPassword(!showPassword)}
          onChangeText={(text) => setPassword(text)}
        />
        <View style={{ height: 50 }} />
        <UIButton text="Sign Up" />
        <UIText
          text={"Already have an account?" + "\n" + "Sign In"}
          type="button"
          style={{ alignSelf: "center", position: "absolute", bottom: 50 }}
          textStyle={{ textAlign: "center" }}
          onPress={() => navigation.navigate("Sign In")}
        />
      </UIScrollView>
    </UIBackgroundView>
  );
}
