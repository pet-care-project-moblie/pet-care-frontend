import * as React from "react";
import Svg, { Path } from "react-native-svg";

interface Props {
  height: number;
  color: string;
}

function Person({ height, color }: Props) {
  return (
    <Svg width={"100%"} height={height} viewBox="0 -960 960 960" fill={color}>
      <Path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47zM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160z" />
    </Svg>
  );
}

export default Person;
