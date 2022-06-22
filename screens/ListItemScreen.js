import React from "react";
import { View } from "react-native";
import {
  UICard,
  UIBackgroundView,
  UIHeader,
  UIScrollView,
  UIListItem,
} from "../ui-components/index";

import image from "../assets/image.jpg";

export default function ListItemScreen({ navigation }) {
  return (
    <UIBackgroundView>
      <UIHeader title="List Item" navigation={navigation} />
      <UIScrollView>
        <UICard
          title="Props"
          subtitle={
            "title" +
            "\n" +
            "subtitle" +
            "\n" +
            "icon" +
            "\n" +
            "image" +
            "\n" +
            "first: bool" +
            "\n" +
            "more: bool" +
            "\n" +
            "onPress" +
            "\n" +
            "style"
          }
        />
        <View style={{ height: 20 }} />
        <UIListItem
          title="title"
          subtitle="subtitle"
          image={image}
          first
          more
        />
        <UIListItem title="title" subtitle="subtitle" icon="github" more />
        <UIListItem title="title" subtitle="subtitle" icon="github" more />
      </UIScrollView>
    </UIBackgroundView>
  );
}
