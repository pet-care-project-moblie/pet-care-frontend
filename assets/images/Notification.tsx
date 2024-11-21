import * as React from "react"
import Svg, { Path } from "react-native-svg"

interface Props {
    height: number;
    color: string;
}

function Notification({ height, color }: Props) {
    return (
        <Svg
            width={"100%"}
            height={height}
            fill={color}
            viewBox="0 -960 960 960"
        >
            <Path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160zM480-80q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80z" />
        </Svg>
    )
}

export default Notification
