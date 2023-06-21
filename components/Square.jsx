import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../constants/colors";

const Square = ({ row, col }) => {
  const offset = row % 2 === 0 ? 1 : 0;

  return (
    <View
      style={{
        padding: 4,
        justifyContent: "space-between",
        flex: 1,
        backgroundColor: (col + offset) % 2 === 0 ? colors.white : colors.black,
      }}
    >
      <Text
        style={{
          color: (col + offset) % 2 === 0 ? colors.black : colors.white,
          fontWeight: "500",
          opacity: col === 0 ? 1 : 0,
        }}
      >
        {8 - row}
      </Text>
      <Text
        style={{
          color: (col + offset) % 2 === 0 ? colors.black : colors.white,
          fontWeight: "500",
          alignSelf: "flex-end",
          opacity: row === 7 ? 1 : 0,
        }}
      >
        {String.fromCharCode("a".charCodeAt(0) + col)}
      </Text>
    </View>
  );
};

export default Square;

const styles = StyleSheet.create({});
