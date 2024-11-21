import * as React from "react";
import Svg, { G, Path, Circle } from "react-native-svg";
interface Props {
  height: number;
}

function Search({ height }: Props) {
  return (
    <Svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      viewBox="0 0 48 48"
      height={height}
      width="100%"
    >
      <G fill="#616161" stroke="none">
        <Path
          transform="rotate(-45 36.582 36.595)"
          d="M34.6 28.1H38.6V45.1H34.6z"
        />
        <Circle cx={20} cy={20} r={16} />
      </G>
      <Path
        transform="rotate(-45 38.235 38.249)"
        fill="#37474F"
        stroke="none"
        d="M36.2 32.1H40.2V44.400000000000006H36.2z"
      />
      <Circle fill="#64B5F6" cx={20} cy={20} r={13} stroke="none" />
      <Path
        fill="#BBDEFB"
        d="M26.9 14.2c-1.7-2-4.2-3.2-6.9-3.2s-5.2 1.2-6.9 3.2c-.4.4-.3 1.1.1 1.4.4.4 1.1.3 1.4-.1C16 13.9 17.9 13 20 13s4 .9 5.4 2.5c.2.2.5.4.8.4.2 0 .5-.1.6-.2.4-.4.4-1.1.1-1.5z"
        stroke="none"
      />
    </Svg>
  );
}

export default Search;
