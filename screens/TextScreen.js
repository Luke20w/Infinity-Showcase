import React from "react";
import { View } from "react-native";
import {
  UIText,
  UICard,
  UIBackgroundView,
  UIHeader,
  UIScrollView,
} from "../ui-components/index";

export default function TextScreen({ navigation }) {
  return (
    <UIBackgroundView>
      <UIHeader title="Text" navigation={navigation} />
      <UIScrollView>
        <UICard
          title="Props"
          subtitle={
            "text" +
            "\n" +
            "type: header, header2, title, button, subtitle" +
            "\n" +
            "color" +
            "\n" +
            "style" +
            "\n" +
            "textStyle" +
            "\n" +
            "onPress"
          }
        />
        <View style={{ height: 20 }} />
        <UIText text="header" type="header" />
        <UIText text="header2" type="header2" />
        <UIText text="title" type="title" />
        <UIText text="button" type="button" />
        <UIText text="default" />
        <UIText text="subtitle" type="subtitle" />
      </UIScrollView>
    </UIBackgroundView>
  );
}
