import * as React from "react";
import Svg, { Path } from "react-native-svg";

interface Props {
    height: number;
    color: string;
}

function Download({ height, color }: Props) {
    return (
        <Svg width={"100%"} height={height} viewBox="0 -960 960 960" fill={color}>
            <Path d="M480-320L280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200zM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240z" />
        </Svg>
    );
}

export default Download;
