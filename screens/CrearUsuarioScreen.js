import React, { useState } from "react";
import {
  Button,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
} from "react-native";

import firebase from "../database/firebase";

const CrearUsuarioScreen = (props) => {
  const initialState = {
    nombre: "",
    email: "",
    telefono: "",
  };

  const [state, setState] = useState(initialState);

  const handleChangeText = (value, nombre) => {
    setState({ ...state, [nombre]: value });
  };

  const guardarNuevoUsuario = async () => {
    if (state.nombre === "") {
      alert("Por favor, ingrese un nombre");
    } else {

      try {
        await firebase.db.collection("usuarios").add({
          nombre: state.nombre,
          email: state.email,
          telefono: state.telefono,
        });

        props.navigation.navigate("ListaUsuarios");
      } catch (error) {
        console.log(error)
      }
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Name Input */}
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Nombre"
          onChangeText={(value) => handleChangeText(value, "nombre")}
          value={state.name}
        />
      </View>

      {/* Email Input */}
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Email"
          multiline={true}
          numberOfLines={4}
          onChangeText={(value) => handleChangeText(value, "email")}
          value={state.email}
        />
      </View>

      {/* Input */}
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="telefono"
          onChangeText={(value) => handleChangeText(value, "telefono")}
          value={state.telefono}
        />
      </View>

      <View style={styles.button}>
        <Button title="Guardar Usuario" onPress={() => guardarNuevoUsuario()} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  loader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CrearUsuarioScreen;