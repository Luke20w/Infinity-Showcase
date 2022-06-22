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

export default function SignInScreen1({ navigation }) {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);

  return (
    <UIBackgroundView>
      <UIHeader navigation={navigation} />
      <UIScrollView>
        <View style={{ height: 50 }} />
        <UIText text="Nice to meet you!" type="header" />
        <View style={{ height: 30 }} />
        <UIInput
          title="Full name"
          icon="person"
          onChangeText={(text) => setName(text)}
        />
        <UIInput
          title="Email address"
          icon="email-outline"
          keyboardType="email-address"
          onChangeText={(text) => setName(text)}
        />
        <UIInput
          title="Phone number"
          icon="phone-outline"
          keyboardType="number-pad"
          onChangeText={(text) => setName(text)}
        />
        <View style={{ height: 50 }} />
        <UIButton
          text="Next"
          onPress={() => navigation.navigate("Sign Up 2")}
        />
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
