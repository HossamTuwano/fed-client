import { Stack, useNavigation } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function Home() {
  const navigation = useNavigation();

  React.useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <>
      <Text>home</Text>
    </>
  );
}