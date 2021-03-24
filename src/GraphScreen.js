import React from "react";
import {
  View,
  Text,
} from "react-native";

export default GraphScreen = ({route}) => {

  const userInput=route.params.userInput

  return (
    <View>
      <Text>{userInput}</Text>
    </View>
  );
};
