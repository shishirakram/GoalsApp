import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const GoalComponent = props => {
  const [goalEntered, goal] = useState("");
  const inputTextHandler = enteredText => {
    goal(enteredText);
  };
  const clearText = () => {
    props.buttonHandler(goalEntered);
    goal("");
  };

  return (
    <Modal visible={props.visibility}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.goalInput}
          placeholder="Type Something..."
          onChangeText={inputTextHandler}
          value={goalEntered}
        />
        <View style={styles.buttonStyle}>
          <Button title="ADD" style={styles.addButton} onPress={clearText} />
          <Button title="CANCEL" onPress={props.cancel} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    padding: 20,
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  goalInput: {
    borderWidth: 1,
    borderRadius: 1,
    borderColor: "black",
    marginBottom: 10,
    width: "80%"
  },
  buttonStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "50%"
  },
  addButton: {
    padding: 5,
    flex: 1
  },
  cancelButton: {
    padding: 5,
    flex: 1
  }
});
export default GoalComponent;
