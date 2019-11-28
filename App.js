import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList
} from "react-native";
import GoalComponent from "./components/GoalComponent";
import GoalDisplay from "./components/GoalDisplayComponent";

export default function App() {
  const [initialGoals, setNewGoals] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const addButtonHandler = title => {
    setNewGoals(currentGoals => [
      ...initialGoals,
      { key: Math.random().toString(), value: title }
    ]);
    setIsVisible(false);
  };
  const deleteHandler = id => {
    setNewGoals(currentGoals => {
      return initialGoals.filter(goal => goal.key !== id);
    });
  };
  const cancel = () => {
    setIsVisible(false);
  };
  const showModel = () => {
    setIsVisible(true);
    console.log("ShowModel: ", isVisible);
  };
  return (
    <View style={styles.screen}>
      <Button title="Add a Goal" onPress={showModel} />
      <GoalComponent
        buttonHandler={addButtonHandler}
        visibility={isVisible}
        cancel={cancel}
      />
      <FlatList
        data={initialGoals}
        renderItem={itemData => (
          <GoalDisplay data={itemData.item} deleteHandler={deleteHandler} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  addButton: {
    padding: 5
  }
});
