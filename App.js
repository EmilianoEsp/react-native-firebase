import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";

// Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

// Components
import CrearUsuarioScreen from "./screens/CrearUsuarioScreen";
import DetalleUsuarioScreen from "./screens/DetalleUsuarioScreen";
import ListaUsuarios from "./screens/ListaUsuarios";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#621FF7",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="ListaUsuarios"
        component={ListaUsuarios}
        options={{ title: "Lista de Usuarios" }}
      />
      <Stack.Screen
        name="CrearUsuarioScreen"
        component={CrearUsuarioScreen}
        options={{ title: "Crear un Nuevo Usuario" }}
      />
      <Stack.Screen
        name="DetalleUsuarioScreen"
        component={DetalleUsuarioScreen}
        options={{ title: "Detalle Usuario" }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});