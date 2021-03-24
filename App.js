import React from "react";
import { View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import GraphScreen from "./src/screens/GraphScreen";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#dbf0f7",
          },
        }}
      >
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: "",
            headerLeft: () => (
              <View style={{ marginLeft: 10 }}>
                <Image
                  source={require("./src/images/Header.png")}
                  style={{ width: 180, height: 30 }}
                />
              </View>
            ),
          }}
        />
        <Stack.Screen
          name="GraphScreen"
          component={GraphScreen}
          options={{
            title: "",
            headerLeft: () => (
              <View style={{ marginLeft: 10 }}>
                <Image
                  source={require("./src/images/Header.png")}
                  style={{ width: 180, height: 30 }}
                />
              </View>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
