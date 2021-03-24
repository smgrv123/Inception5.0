import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
} from "react-native";
import LottieView from "lottie-react-native";

export default function HomeScreen({ navigation }) {
  const [userInput, setUserInput] = useState("");
  const [disabled, setDisabled] = useState(true);
  const width = Dimensions.get("screen").width;
  const height = Dimensions.get("screen").height;

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../images/BG.png")}
        resizeMode={"cover"}
        style={{ height: height, width: width }}
      >
        <View style={{ flex: 1 }}>
          <View
            style={{
              marginLeft: "5%",
              justifyContent: "center",
              flex: 1,
            }}
          >
            <Text
              style={{ fontWeight: "bold", fontSize: 30, color: "#26538E" }}
            >
              Know your sentiments
            </Text>
            <Text style={{ fontSize: 14, color: "#26538E" }}>
              An approach to bind NLP and ML together to detect the{`\n`}emotions and
              sentiments of a person through textual format.
            </Text>
          </View>
          <View style={{ flex: 2.5, justifyContent: "center" }}>
            <View
              style={{
                width: width - 20,
                height: height / 3,
                backgroundColor: "#dbf0f7",
                alignSelf: "center",
                justifyContent: "center",
                borderRadius: 10,
                marginTop: "10%",
              }}
            >
              <Text
                style={{
                  marginLeft: "6%",
                  marginBottom: "5%",
                  fontWeight: "bold",
                  fontSize: 18,
                  color: "#26538E",
                }}
              >
                Enter Your Feedback
              </Text>
              <TextInput
                style={{
                  width: width - 60,
                  height: height / 7,
                  alignSelf: "center",
                  backgroundColor: "#ffffff",
                  borderRadius: 10,
                  paddingLeft: "4%",
                  paddingTop: "4%",
                  textAlign: "left",
                  textAlignVertical: "top",
                }}
                placeholder={"Please enter your feedback"}
                multiline={true}
                value={userInput}
                onChangeText={(input) => {
                  setUserInput(input);
                  if (
                    input.trim().split(" ").length >= 5 &&
                    input.trim().length <= 200
                  ) {
                    setDisabled(false);
                  } else {
                    setDisabled(true);
                  }
                }}
              />

              <TouchableOpacity
                style={{
                  backgroundColor: disabled ? "#808080" : "#26538E",
                  height: height / 20,
                  width: "30%",
                  marginLeft: "65%",
                  justifyContent: "center",
                  borderRadius: 3,
                  marginTop: "4%",
                }}
                onPress={() => {
                  navigation.navigate("GraphScreen", {
                    userInput,
                  });
                }}
                disabled={disabled}
              >
                <Text style={{ alignSelf: "center", color: "#ffffff" }}>
                  SUBMIT
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flex: 4 }}>
            <LottieView
              source={require("../Lottie/lottie2.json")}
              autoPlay={true}
              loop={true}
              style={{
                alignSelf: "center",
                width: width - 10,
                height: height / 2.5,
              }}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
