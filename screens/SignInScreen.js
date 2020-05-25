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

export default function SignInScreen({ navigation }) {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <UIBackgroundView>
      <UIHeader navigation={navigation} />
      <UIScrollView>
        <View style={{ height: 80 }} />
        <UIText text="Welcome!" type="header" />
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
        <UIText
          text="Forgot password?"
          type="button"
          style={{ alignSelf: "flex-end", margin: 15 }}
          onPress={() => navigation.navigate("Forgot Password")}
        />
        <View style={{ height: 50 }} />
        <UIButton text="Sign In" />
        <UIText
          text={"Dont have an account?" + "\n" + "Sign Up"}
          type="button"
          style={{ alignSelf: "center", position: "absolute", bottom: 50 }}
          textStyle={{ textAlign: "center" }}
          onPress={() => navigation.navigate("Sign Up 1")}
        />
      </UIScrollView>
    </UIBackgroundView>
  );
}
