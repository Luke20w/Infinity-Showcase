import React, { useState } from "react";
import { View } from "react-native";
import {
  UIBackgroundView,
  UIHeader,
  UIScrollView,
  UIInput,
  UIButton,
  UIText,
  UIModal,
} from "../ui-components/index";

export default function ForgotPasswordScreen({ navigation }) {
  const [email, setEmail] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <UIBackgroundView>
      <UIHeader navigation={navigation} />
      <UIScrollView>
        <View style={{ height: 80 }} />
        <UIText text="It's alright!" type="header" />
        <UIText text="Just enter your email and we'll send you a link to reset your password" />
        <View style={{ height: 40 }} />
        <UIInput
          title="Email"
          icon="email-outline"
          keyboardType="email-address"
          onChangeText={(text) => setEmail(text)}
        />
        <UIText
          text="Didn't get the link?"
          type="button"
          style={{ alignSelf: "flex-end", margin: 15 }}
          onPress={() => setModalVisible(true)}
        />
        <View style={{ height: 50 }} />
        <UIButton text="Send" onPress={() => setModalVisible(true)} />
        <UIModal
          title="Email sent"
          visible={modalVisible}
          setVisible={(bool) => setModalVisible(bool)}
          style={{ paddingVertical: 20 }}
        >
          <UIText text="A link has been sent to your email" type="title" />
          <UIText text="If you didn't receive this link, please wait a few minutes, check your spam folder, or try sending the link again" />
          <View style={{ height: 20 }} />
          <UIButton
            text="Got it!"
            onPress={() => {
              setModalVisible(false);
              navigation.navigate("Sign In");
            }}
          />
        </UIModal>
      </UIScrollView>
    </UIBackgroundView>
  );
}
