import * as React from "react"
import Svg, { Path } from "react-native-svg"

interface Props {
    height: number;
}

function Female({ height }: Props) {
    return (
        <Svg
            width={"100%"}
            height={height}
            viewBox="0 -960 960 960"
            fill="#E17DF2"
        >
            <Path d="M440-120v-80h-80v-80h80v-84q-79-14-129.5-75.5T260-582q0-91 64.5-154.5T480-800q91 0 155.5 63.5T700-582q0 81-50.5 142.5T520-364v84h80v80h-80v80h-80zm40-320q58 0 99-41t41-99q0-58-41-99t-99-41q-58 0-99 41t-41 99q0 58 41 99t99 41z" />
        </Svg>
    )
}

export default Female
