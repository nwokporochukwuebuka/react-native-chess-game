import { StyleSheet, Text, View, Dimensions } from "react-native";
import React, { useRef, useState } from "react";
import { Chess } from "chess.js";

import Background from "./Background";
import Piece from "../components/Piece";
import { SIZE } from "../components/Notation";

const { width } = Dimensions.get("window");

function useConst(initialValue) {
  const ref = useRef();
  if (ref.current === undefined) {
    ref.current = {
      value: typeof initialValue === "function" ? initialValue() : initialValue,
    };
  }
  return ref.current.value;
}

const Board = () => {
  const chess = useConst(() => new Chess());
  const [state, setState] = useState({
    player: "w",
    board: chess.board(),
  });
  return (
    <View style={styles.container}>
      <Background />
      {state.board.map((row, i) =>
        row.map((square, j) => {
          if (square === null) {
            return null;
          }
          /* console.log({ x: j * SIZE, y: i * SIZE },
            {color: square.color, type: square.type}) */
          return (
            <Piece
              position={{ x: j * SIZE, y: i * SIZE }}
              id={`${square.color}${square.type}`}
            />
          );
        })
      )}
    </View>
  );
};

export default Board;

const styles = StyleSheet.create({
  container: {
    width,
    height: width,
  },
});
