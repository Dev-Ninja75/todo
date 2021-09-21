import React, { useState } from "react";
import {
  Modal,
  View,
  StyleSheet,
  Pressable,
  Text,
  TextInput,
} from "react-native";

export default function ListModal() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Pressable onPress={() => setModalVisible(!modalVisible)}>
        <Text> + Add a list </Text>
      </Pressable>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      ></Modal>
      <TextInput
        style={styles.input}
        //onChangeText={onChangeNumber}
        //value={number}
        placeholder="List names"
        keyboardType="numeric"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
