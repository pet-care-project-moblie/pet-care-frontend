import * as React from "react"
import Svg, { Path } from "react-native-svg"

interface Props {
    height: number;
    color: string;
}

function MyLocation({ height, color }: Props) {
    return (
        <Svg
            width={"100%"}
            height={height}
            viewBox="0 -960 960 960"
            fill={color}
        >
            <Path d="M440-42v-80q-125-14-214.5-103.5T122-440H42v-80h80q14-125 103.5-214.5T440-838v-80h80v80q125 14 214.5 103.5T838-520h80v80h-80q-14 125-103.5 214.5T520-122v80h-80zm40-158q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 116 82 198t198 82zm0-120q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47zm0-80q33 0 56.5-23.5T560-480q0-33-23.5-56.5T480-560q-33 0-56.5 23.5T400-480q0 33 23.5 56.5T480-400zm0-80z" />
        </Svg>
    )
}

export default MyLocation
