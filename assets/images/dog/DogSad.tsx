import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

interface Props {
    height: number;
}

function DogSad({ height }: Props) {
    return (
        <Svg
            width={"100%"}
            height={height}
            viewBox="0 0 137 211"
            fill="none"
        >
            <G clipPath="url(#clip0_1310_26011)">
                <Path
                    d="M11.49 209.39c-12.23-1-12.07-3.69-11.08-6.8.99-3.11 4-2.53 5.14-3.3 1.14-.77-5.55-2.53-4.25-6.22 1.3-3.69 6-1.95 6-1.95S0 185.49 3 181c3-4.49 12 1.56 16.47 10.11 4.47 8.55-7.98 18.28-7.98 18.28z"
                    fill="#F4BF98"
                />
                <Path
                    d="M122.47 210.73H14.65s-4.69-4-4.36-6.36c.33-2.36-.29-14.06-.29-14.06s-1.68 2.68-2 .33c-.32-2.35 4-20.76 4-20.76s-3 2.68-3 .34c0-2.34 7.37-18.09 7.37-18.09s-2.68 1.68-2.68-.67 7-16.4 7-16.4c-2.34-1.68 4-11 4-11l78.36-13.73s18.25 26.79 16.24 47.21l-2.35-1s6 13.89 5.7 27.79l-2.35-1c3 7.08 3.46 13.58 3.18 20.09l-2.34-1a16.725 16.725 0 011.34 8.31z"
                    fill="#EA8C3F"
                />
                <Path
                    d="M72.24 172.9C65 168 65 161.18 65 161.18l-1 2.51s-4-5-4-10.89l-1.84 2.52s-14.57-10.55-13.06-23.95l47.88.34s-1.34 14.06-5.36 20.09L86 149.46s-.17 5.69-3 9.2l-1.34-1.84s-.67 6.87-2.51 9.38l-1.51-1.51c-1.26 4.2-3.09 6.84-5.4 8.21z"
                    fill="#F4BF98"
                />
                <Path
                    d="M54.49 160.51c2.2 4.16 6.25 13.61 7.59 17 1.34 3.39 8 22.77 8 22.77s-19.26 4.22-19.43 1.2c-3.18-7.2-26.5-48.25-25.83-64.82.24-5.03 21.64 8.61 29.67 23.85zM111.2 161.4c-.62 3-6.25 39.06-6.25 39.06s-18.06 5.1-17.53 2.13c2.31-12.92 2.65-39.69 2.9-43.09.46-6.09 14.94-28.32 20.93-24.61 3.52 2.18.22 25.11-.05 26.51zM65.41 138.05c-25.34-.8-35.69-10.86-35.69-10.86s-3.33 2.19-4.47 1.56c-3.74-2.06-4.69-11.33-4.69-11.33s-4 1.79-4.46.89a30.5 30.5 0 01-.89-5.13s-2.46 3.13-3.35 2c-.89-1.13 1.56-9.82 1.56-9.82s-1.56.67-2.23-.67c-.67-1.34 4.91-12.27 4.91-12.27s-3.13 1.34-3.8.22c-.67-1.12 5.58-11.83 5.58-11.83s-2.67.67-2.67-1.34c0-2.01 9.15-15.62 9.15-15.62l31.7-21.66s1.78 2.9 2.68 2.68c.9-.22.89-4.24 2-4.69 1.11-.45 4 2 4 2s3.13-5.36 4.69-5.58c1.56-.22.89 2.9.89 2.9s4.47-3.12 6.25-3.12c1.78 0 .9 3.12.9 3.12s4.46-.89 5.36-.67c.9.22 0 3.8 0 3.8s9.59 1.78 15.4 4c5.81 2.22 13.39 9.15 14.06 10.94.67 1.79-1.78 2.9-1.78 2.9s4.46 5.35 5.35 7.36c.89 2.01-1.34 1.79-1.34 1.79a50.263 50.263 0 014.92 6 4.993 4.993 0 01.67 4s3.34 6.69 3.34 7.81c0 1.12-2-.22-2-.22s4.69 9.15 4.25 11.16c-.44 2.01-2 .67-2 .67s.89 8-.23 8.48c-1.12.48-2.23-1.12-2.23-1.12s-1.78 8.71-3.35 10.27c-1.57 1.56-2.23-.67-2.23-.67s-6.08 18-10.94 11.61c-3.12 4.1-10.96 11.33-39.31 10.44z"
                    fill="#F9A55A"
                />
                <Path
                    d="M65.41 138.05c-25.34-.8-35.69-10.86-35.69-10.86s-3.33 2.19-4.47 1.56c-3.74-2.06-4.69-11.33-4.69-11.33s-4 1.79-4.46.89a30.5 30.5 0 01-.89-5.13s-2.46 3.13-3.35 2c-.89-1.13 1.56-9.82 1.56-9.82s-1.56.67-2.23-.67c-.67-1.34 4.91-12.27 4.91-12.27s-3.13 1.34-3.8.22c-.67-1.12 5.58-11.83 5.58-11.83s-2.67.67-2.67-1.34c0-2.01 9.15-15.62 9.15-15.62l31.7-21.66s1.78 2.9 2.68 2.68c.9-.22.89-4.24 2-4.69 1.11-.45 4 2 4 2s3.13-5.36 4.69-5.58c1.56-.22.89 2.9.89 2.9s4.47-3.12 6.25-3.12c1.78 0 .9 3.12.9 3.12s4.46-.89 5.36-.67c.9.22 0 3.8 0 3.8s9.59 1.78 15.4 4c5.81 2.22 13.39 9.15 14.06 10.94.67 1.79-1.78 2.9-1.78 2.9s4.46 5.35 5.35 7.36c.89 2.01-1.34 1.79-1.34 1.79a50.263 50.263 0 014.92 6 4.993 4.993 0 01.67 4s3.34 6.69 3.34 7.81c0 1.12-2-.22-2-.22s4.69 9.15 4.25 11.16c-.44 2.01-2 .67-2 .67s.89 8-.23 8.48c-1.12.48-2.23-1.12-2.23-1.12s-1.78 8.71-3.35 10.27c-1.57 1.56-2.23-.67-2.23-.67s-6.08 18-10.94 11.61c-3.12 4.1-10.96 11.33-39.31 10.44z"
                    fill="#FFE3C5"
                />
                <Path
                    d="M121.46 87.29s2 1.33 2 .22-3.34-7.81-3.34-7.81a5.006 5.006 0 00-.67-4 50.263 50.263 0 00-4.92-6s2.24.22 1.34-1.79c-.9-2.01-5.35-7.36-5.35-7.36s2.45-1.12 1.78-2.9c-.33-.9-2.4-3.07-5.1-5.3-.333.7-.889 1.27-1.58 1.62 0 0 4 5.16 4.74 7.09.74 1.93-1.18 1.72-1.18 1.72a49.346 49.346 0 014.34 5.81 5.103 5.103 0 01.59 3.87s3 6.45 3 7.53-1.78-.22-1.78-.22 4.14 8.82 3.75 10.75c-.39 1.93-1.78.65-1.78.65s.79 7.74-.19 8.17c-.98.43-2-1.08-2-1.08s-1.57 8.39-3 9.9c-1.43 1.51-2-.65-2-.65s-5.37 17.31-9.67 11.18c-2.76 3.87-9.69 10.84-34.74 10-22.39-.77-31.54-10.46-31.54-10.46s-2.94 2.11-3.95 1.5c-3.3-2-4.14-10.91-4.14-10.91s-3.55 1.72-3.95.86a32.994 32.994 0 01-.79-5s-2.17 3-3 1.94c-.83-1.06 1.38-9.46 1.38-9.46a1.45 1.45 0 01-2-.65c-.59-1.29 4.34-11.82 4.34-11.82s-2.76 1.29-3.35.21c-.59-1.08 4.93-11.39 4.93-11.39s-2.37.64-2.37-1.29c0-1.1 2.6-5.78 4.85-9.64l-1.88 1.29s-9.15 13.61-9.15 15.62 2.67 1.34 2.67 1.34-6.12 10.7-5.45 11.81c.67 1.11 3.8-.22 3.8-.22s-5.58 10.94-4.91 12.28c.67 1.34 2.23.67 2.23.67s-2.46 8.7-1.56 9.82c.9 1.12 3.35-2 3.35-2a30.5 30.5 0 00.89 5.13c.44.9 4.46-.89 4.46-.89s1 9.27 4.69 11.33c1.14.63 4.47-1.56 4.47-1.56s10.35 10.06 35.69 10.86c28.35.89 36.19-6.34 39.31-10.36 4.86 6.36 10.94-11.61 10.94-11.61s.67 2.23 2.23.67 3.35-10.27 3.35-10.27 1.12 1.57 2.23 1.12c1.11-.45.23-8.48.23-8.48s1.56 1.34 2-.67c.44-2.01-4.24-11.17-4.24-11.17z"
                    fill="#F4BF98"
                />
                <Path
                    d="M67.67 61.17c.84-7.37.66-14.51-1.63-21-.74 1.1-1.28 2-1.28 2s-2.9-2.45-4-2c-1.1.45-1.11 4.47-2 4.69-.89.22-2.68-2.68-2.68-2.68L24.36 63.85s-9.15 13.61-9.15 15.62 2.67 1.34 2.67 1.34a108.222 108.222 0 00-5.16 9.92 30.433 30.433 0 003.22 1.76l.16-.07-.06.12a28.417 28.417 0 005.12 1.78c18.63 4.53 43.78-9.39 46.51-33.15zM121.88 85.19l.73-.2c-1-2.31-2.48-5.29-2.48-5.29a5.006 5.006 0 00-.67-4 50.248 50.248 0 00-4.92-6s2.24.22 1.34-1.79c-.9-2.01-5.35-7.36-5.35-7.36s2.45-1.12 1.78-2.9c-.67-1.78-8.26-8.71-14.06-10.94-5.8-2.23-15.4-4-15.4-4s.89-3.57 0-3.8c-.89-.23-5.36.67-5.36.67s.89-3.12-.9-3.12c-.25 4.71-10.71 64.67 45.29 48.73z"
                    fill="#F9A55A"
                />
                <Path
                    d="M2.7 21.65C2.7 23 17.79 38 17.79 38S25.28 56.55 25 65l31.28-21.69C40.43 20.54 2.7 20.32 2.7 21.65zM119 0c-13.61 1.56-39.28 27.24-39.73 40.85L107 52.46C105.39 31.92 120.62-.18 119 0z"
                    fill="#F9A55A"
                />
                <Path
                    d="M71 96.53c-6.74-.31-12.42-5.62-12.78-6.38-.36-.76.19-2.63.47-3.35a.631.631 0 01.84-.34.7.7 0 01.37.87 6 6 0 00-.52 2.3c.53.83 6.4 5.91 12.76 5.59 6.36-.32 12.29-4.53 13-5.47a6.811 6.811 0 00-.77-2 .64.64 0 01.26-.87.66.66 0 01.88.3c.34.64 1.09 2.21.89 3-.28 1.12-7.14 6-14.14 6.35-.393.02-.813.02-1.26 0z"
                    fill="#683838"
                />
                <Path
                    d="M72.24 96a.641.641 0 01-.64-.66l.16-10.05a.68.68 0 01.67-.64.639.639 0 01.64.66l-.16 10a.66.66 0 01-.67.69z"
                    fill="#683838"
                />
                <Path
                    d="M72.24 86.34c-3-.34-6.14-2.18-5.91-3.07.23-.89 12.29-1.3 13.18-.18.89 1.12-5.51 3.45-7.27 3.25zM50.15 72.81c.39 3.87.78 7.16 2.91 7.16s2.13-9.09 2.13-9.09l-5.04 1.93zM96.9 71.2c-.34 4.11-.68 7.6-2.55 7.6-1.87 0-1.87-9.66-1.87-9.66l4.42 2.06z"
                    fill="#683838"
                />
                <Path
                    d="M43.39 134.28c13.56 13.28 45.26 12.05 53.74-.67-11.72 4.91-26.81 7.31-53.74.67z"
                    fill="#B2344C"
                />
                <Path d="M73.36 142.76h-3.35v4.91h3.35v-4.91z" fill="#B2344C" />
                <Path
                    d="M73.045 160.127c3.833-.651 6.424-4.22 5.787-7.971-.637-3.752-4.261-6.265-8.094-5.614-3.834.651-6.425 4.22-5.787 7.972.637 3.751 4.26 6.265 8.094 5.613z"
                    fill="#F29E38"
                />
                <Path
                    d="M42.44 210.73H9.18s3.82-11.46 12.58-13.12c15.24-2.88 20.68 13.12 20.68 13.12zM112.61 210.73h23.71s-6.81-10.32-13.62-11.81c-11.86-2.6-10.09 11.81-10.09 11.81z"
                    fill="#F4BF98"
                />
                <Path
                    d="M90.9 69.85c6.32 3.69 11.52 2.84 11.52 2.84l-11.26-6.44-.26 3.6zM57 70.15c-7.31 5-13.12 5.46-13.12 5.46l12.31-8.69.81 3.23zM68 200c-3.24-.21-9.4-.55-13.57-.41a5.177 5.177 0 00-4.85 4.26c-.57 3.18-1.08 6.89-1.08 6.89h28.1a37.005 37.005 0 00-4.33-8.2A5.997 5.997 0 0068 200zM90 200.15c3-.2 8.64-.54 12.53-.4a6.003 6.003 0 015.15 4.2c1 3.12 2 6.78 2 6.78H83.65a32.063 32.063 0 012.79-8.08 4.518 4.518 0 013.56-2.5z"
                    fill="#FFE3C5"
                />
                <Path
                    d="M77.75 153.33a5.742 5.742 0 00-5.81-5.73 5.842 5.842 0 00-5.89 5.73 5.749 5.749 0 005.81 5.74 5.842 5.842 0 005.89-5.74z"
                    fill="#FFCA45"
                />
                <Path
                    d="M70.88 154.07a34.815 34.815 0 01-4.35 1.58 5.73 5.73 0 001 1.47 30.267 30.267 0 0010-2.08c.185-.551.28-1.129.28-1.71a5.512 5.512 0 00-.71-2.76 32.84 32.84 0 01-6.22 3.5z"
                    fill="#FFEA80"
                />
                <Path
                    d="M104.16 49l-19.42-9.6s17.14-28.46 27.86-31.59C107.41 23 104.52 35.48 104.16 49zM9.32 25.93L22 37.33l6.52 20.52 21.17-14C28.54 24.31 9.32 25.93 9.32 25.93z"
                    fill="#E06332"
                />
                <Path
                    d="M25.2 32.32a37.11 37.11 0 0114 18.51l10.56-7c-18.63-17.2-35.74-18-39.58-18a38.23 38.23 0 0115.02 6.49zM98.55 46.23l5.61 2.77c.34-12.82 3-24.72 7.65-38.84a70.014 70.014 0 00-11.23 24.52 79.23 79.23 0 00-2.03 11.55z"
                    fill="#CC512B"
                />
                <Path
                    d="M48.8 196.5c-9.21-9.37-14.23-14.73-14.23-14.73l3-.5-6.19-8.54 2.85.67-4.19-9.21 4.86.67 13.9 31.64zM104.39 195.5c6.42-9.38 9.85-14.74 9.85-14.74l-3.1-.5 3.7-8.54-2.61.67 1.2-14.56-4.25 6-4.79 31.67z"
                    fill="#F9A55A"
                />
            </G>
            <Defs>
                <ClipPath id="clip0_1310_26011">
                    <Path fill="#fff" d="M0 0H136.32V210.73H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default DogSad
