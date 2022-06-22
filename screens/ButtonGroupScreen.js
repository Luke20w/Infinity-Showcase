import React from "react";
import { View } from "react-native";
import {
  UIButtonGroup,
  UICard,
  UIBackgroundView,
  UIHeader,
  UIScrollView,
} from "../ui-components/index";

export default function ButtonGroupScreen({ navigation }) {
  return (
    <UIBackgroundView>
      <UIHeader title="Button Group" navigation={navigation} />
      <UIScrollView>
        <UICard
          title="Props"
          subtitle={
            "buttons: [{title, onPress}]" + "\n" + "initIndex" + "\n" + "style"
          }
        />
        <UIButtonGroup
          buttons={[
            { title: "Button 1" },
            { title: "Button 2" },
            { title: "Button 3" },
          ]}
        />
      </UIScrollView>
    </UIBackgroundView>
  );
}
