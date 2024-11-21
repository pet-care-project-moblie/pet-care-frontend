import * as React from "react"
import Svg, { Path } from "react-native-svg"

interface Props {
    height: number;
    color: string;
}

function NewsPaper({ height, color }: Props) {
    return (
        <Svg
            width={"100%"}
            height={height}
            viewBox="0 -960 960 960"
            fill={color}
        >
            <Path d="M160-120q-33 0-56.5-23.5T80-200v-640l67 67 66-67 67 67 67-67 66 67 67-67 67 67 66-67 67 67 67-67 66 67 67-67v640q0 33-23.5 56.5T800-120H160zm0-80h280v-240H160v240zm360 0h280v-80H520v80zm0-160h280v-80H520v80zM160-520h640v-120H160v120z" />
        </Svg>
    )
}

export default NewsPaper
