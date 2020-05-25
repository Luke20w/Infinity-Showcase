import React from "react";
import { View } from "react-native";
import {
  UICard,
  UIBackgroundView,
  UIHeader,
  UIScrollView,
  UIInput,
} from "../ui-components/index";

export default function InputScreen({ navigation }) {
  return (
    <UIBackgroundView>
      <UIHeader title="Input" navigation={navigation} />
      <UIScrollView>
        <UICard
          title="Props"
          subtitle={
            "title" +
            "\n" +
            "placeholder" +
            "\n" +
            "multiline: bool" +
            "\n" +
            "icon" +
            "\n" +
            "keyboardType" +
            "\n" +
            "secureTextEntry" +
            "\n" +
            "onChangeText" +
            "\n" +
            "onIconPress" +
            "\n" +
            "inputStyle" +
            "\n" +
            "style"
          }
        />
        <UIInput icon="github" />
      </UIScrollView>
    </UIBackgroundView>
  );
}
