import React from "react";
import { StyleSheet, Image } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Chess, Position } from "chess.js";
// import { Vector } from "react-native-redash";

import { toTranslation, SIZE, toPosition } from "./Notation";
// import { Pieces } from "../constants/piece";

const Pieces = {
  br: require("../assets/images/br.png"),
  bp: require("../assets/images/bp.png"),
  bn: require("../assets/images/bn.png"),
  bb: require("../assets/images/bb.png"),
  bq: require("../assets/images/bq.png"),
  bk: require("../assets/images/bk.png"),
  wr: require("../assets/images/wr.png"),
  wn: require("../assets/images/wn.png"),
  wb: require("../assets/images/wb.png"),
  wq: require("../assets/images/wq.png"),
  wk: require("../assets/images/wk.png"),
  wp: require("../assets/images/wp.png"),
};

const Piece = ({ id, position }) => {
  console.log(id, position);
  return (
    <Animated.View style={{
        position: "absolute",
        width: SIZE,
        height: SIZE,
        transform: [{ translateX: position.x }, { translateY: position.y }]
    }} >
      <Image source={Pieces[id]} style={styles.piece} />
    </Animated.View>
  );
  /* return (
    <Animated.View style={{
        position: "absolute",
        width: SIZE,
        height: SIZE,
        transform: [{ translateX: position.x }, { translateY: position.y }]
    }}>
      <Image source={Pieces[id]} style={styles.piece} />;
    </Animated.View>
  ); */
};

export default Piece;
const styles = StyleSheet.create({
  piece: {
    width: SIZE,
    height: SIZE,
  },
});
