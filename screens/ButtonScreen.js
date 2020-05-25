import React from "react";
import { View } from "react-native";
import {
  UIButton,
  UICard,
  UIBackgroundView,
  UIHeader,
  UIScrollView,
} from "../ui-components/index";

export default function ButtonScreen({ navigation }) {
  return (
    <UIBackgroundView>
      <UIHeader title="Button" navigation={navigation} />
      <UIScrollView>
        <UICard
          title="Props"
          subtitle={
            "text" +
            "\n" +
            "type: outline, white" +
            "\n" +
            "icon" +
            "\n" +
            "style" +
            "\n" +
            "onPress"
          }
        />
        <UIButton icon="github" />
        <UIButton text="outline" type="outline" icon="github" />
        <UIButton text="white" type="white" icon="github" />
      </UIScrollView>
    </UIBackgroundView>
  );
}
