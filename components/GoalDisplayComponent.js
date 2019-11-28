import React from "react";
import { FlatList, TouchableOpacity, View, Text } from "react-native";

const GoalDisplay = props => {
  return (
    <TouchableOpacity onPress={props.deleteHandler.bind(this, props.data.key)}>
      <View>
        <Text>
          {props.data.value} {props.data.key}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default GoalDisplay;
