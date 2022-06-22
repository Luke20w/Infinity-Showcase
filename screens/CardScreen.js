import React from "react";
import { View } from "react-native";
import {
  UICard,
  UIBackgroundView,
  UIHeader,
  UIScrollView,
} from "../ui-components/index";

import image from "../assets/image.jpg";

export default function CardScreen({ navigation }) {
  return (
    <UIBackgroundView>
      <UIHeader title="Card" navigation={navigation} />
      <UIScrollView>
        <UICard
          title="Props"
          subtitle={
            "title" +
            "\n" +
            "subtitle" +
            "\n" +
            "date" +
            "\n" +
            "image" +
            "\n" +
            "onPress" +
            "\n" +
            "onLongPress" +
            "\n" +
            "style"
          }
        />
        <UICard
          title="Title"
          subtitle="subtitle"
          date="Monday, May 11"
          image={image}
        />
      </UIScrollView>
    </UIBackgroundView>
  );
}
