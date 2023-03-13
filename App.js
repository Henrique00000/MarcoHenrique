import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Inicio!</Text>
    </View>
  );
}

function Contato() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Entre em contato aqui!</Text>
    </View>
  );
}

function About() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Um pouco sobre!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function Apps() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Inicio"
        screenOptions={{
          tabBarActiveTintColor: "#000000",
        }}
      >
        <Tab.Screen
          name="Inicio"
          component={Feed}
          options={{
            tabBarLabel: "Inicio",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Sobre"
          component={About}
          options={{
            tabBarLabel: "Sobre",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="information-outline"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Contato"
          component={Contato}
          options={{
            tabBarLabel: "Contato",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account-multiple"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
