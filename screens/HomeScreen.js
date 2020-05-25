import React, { useState } from "react";
import { View } from "react-native";
import {
  UIButton,
  UIText,
  UIListItem,
  UICard,
  UIBackgroundView,
  UIHeader,
  UIScrollView,
  UIModal,
} from "../ui-components/index";

export default function HomeScreen({ navigation }) {
  const [dark, setDark] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <UIBackgroundView>
      <UIHeader title="Home" init />
      <UIScrollView>
        <UICard
          title="Hello,"
          subtitle="Welcome to Luke's UI component library. Here you can look at all of the components in this library and test them out. You can even try switching to dark mode! All the UI in this app is made with Luke's UI components"
        />
        <UIButton
          text="Change Theme"
          type="outline"
          icon="sun"
          onPress={() => {
            global.dark = !global.dark;
            setDark(!dark);
          }}
        />
        <View style={{ height: 20 }} />
        <UIText text="Components" type="header2" />
        <UIListItem
          title="Text"
          subtitle="The UIText component"
          onPress={() => navigation.navigate("Text")}
          first
          more
        />
        <UIListItem
          title="Button"
          subtitle="The UIButton component"
          onPress={() => navigation.navigate("Button")}
          more
        />
        <UIListItem
          title="Button Group"
          subtitle="The UIButtonGroup component"
          onPress={() => navigation.navigate("Button Group")}
          more
        />
        <UIListItem
          title="Card"
          subtitle="The UICard component"
          onPress={() => navigation.navigate("Card")}
          more
        />
        <UIListItem
          title="List Item"
          subtitle="The UIListItem component"
          onPress={() => navigation.navigate("List Item")}
          more
        />
        <UIListItem
          title="Input"
          subtitle="The UIInput component"
          onPress={() => navigation.navigate("Input")}
          more
        />
        <UIListItem
          title="Modal"
          subtitle="The UIModal component"
          onPress={() => setModalVisible(true)}
        />
        <View style={{ height: 20 }} />
        <UIText text="Examples" type="header2" />
        <UIListItem
          title="Sign In"
          subtitle="A premade sign in screen"
          onPress={() => navigation.navigate("Sign In")}
          first
          more
        />
        <UIListItem
          title="Sign Up"
          subtitle="A premade sign up screen"
          onPress={() => navigation.navigate("Sign Up 1")}
          more
        />
        <UIListItem
          title="Forgot Password"
          subtitle="A premade forgot password screen"
          onPress={() => navigation.navigate("Forgot Password")}
          more
        />
        <UIModal
          title="Modal"
          visible={modalVisible}
          setVisible={(bool) => setModalVisible(bool)}
        >
          <UICard
            title="Props"
            subtitle={
              "title" +
              "\n" +
              "children (wrap components)" +
              "\n" +
              "visible" +
              "\n" +
              "setVisible"
            }
          />
        </UIModal>
      </UIScrollView>
    </UIBackgroundView>
  );
}
