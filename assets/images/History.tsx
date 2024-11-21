import * as React from "react"
import Svg, { Path } from "react-native-svg"

interface Props {
    height: number;
    color: string;
}

function History({ height, color }: Props) {
    return (
        <Svg
            width={"100%"}
            height={height}
            viewBox="0 -960 960 960"
            fill={color}
        >
            <Path d="M480-120q-138 0-240.5-91.5T122-440h82q14 104 92.5 172T480-200q117 0 198.5-81.5T760-480q0-117-81.5-198.5T480-760q-69 0-129 32t-101 88h110v80H120v-240h80v94q51-64 124.5-99T480-840q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-120zm112-192L440-464v-216h80v184l128 128-56 56z" />
        </Svg>
    )
}

export default History
