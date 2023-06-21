import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Square from "./Square";

const Row = ({ row }) => {
  return (
    <View style={styles.container}>
      {new Array(8).fill(0).map((_, col) => {
        return <Square row={row} col={col} key={col} />;
      })}
    </View>
  );
};

export default Row;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
});
