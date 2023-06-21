import { StyleSheet, View } from "react-native";
import React from "react";
import { colors } from "../constants/colors";
import Board from "./Board";

const Chess = () => {
  return (
    <View style={styles.container}>
      <Board />
    </View>
  );
};

export default Chess;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: colors.backgroundColor,
  },
});
