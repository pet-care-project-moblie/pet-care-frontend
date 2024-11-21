import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

interface Props {
  height: number;
}

function Tree({ height }: Props) {
  return (
    <Svg
      width={"100%"}
      height={height}
      viewBox="0 0 97 189"
      fill="none"
    >
      <G clipPath="url(#clip0_1310_26270)">
        <Path
          d="M11 88.93c-3.93 2.85-7.93 5.78-11 10C6.74 96.55 22.78 92 29.67 91c3-3-3.6-3.08-1.55-6.18a9.642 9.642 0 00-2.49-1.18c-4.91-1.47-10.07 1.97-14.63 5.29zM44.34 138.14a56 56 0 00-2.56-28.22c-3.35-9.52-8.68-19.92-7.69-29.5 1.74-16.89 15-29.51 25-42.55C64.61 30.62 70.22 23.48 73.37 15c.43-1.15-1-1.17-1.28-.31-5.75 15.46-19.31 27.59-28.62 41.13C38.76 62.66 34.65 70 33 78.2c-1.81 9 1.65 17.57 5.06 26.72 2.08 5.55 4.2 11.14 5 16.82.8 5.68-.56 11.3-1.4 16.63-.17 1 2.57.72 2.72-.23h-.04z"
          fill="#BABA4A"
        />
        <Path
          d="M55.9 23.2l-5 .12a14.696 14.696 0 00-5.06.72c-3.63 6.25-4 13.64-.63 17.55a7.352 7.352 0 001.79 1.5c2.7-1.27 5.52-2.28 6.87-5.45 1.74-4.15.13-10.4 2.03-14.44z"
          fill="#CECB52"
        />
        <Path
          d="M76.19 21.61a16.73 16.73 0 00-3.62 1.75c2.76 3.48 8.11 7.29 14.61 10.09.77.32 1.52.62 2.27.9l4.44-1c-1.5-1.61-2.52-4-3.81-5.94-3.37-5.19-8.74-7.41-13.89-5.8z"
          fill="#BABA4A"
        />
        <Path
          d="M45.21 93a143.243 143.243 0 014.54-14.09c-4.58.21-8.11 3.47-9.22 8.52a18.857 18.857 0 00-.27 5.87 21.222 21.222 0 004.95-.3z"
          fill="#CECB52"
        />
        <Path
          d="M30.07 61.05c-1.78-4.27-6.42-7.64-11.34-9.23a35.752 35.752 0 00-15-1.06 12.739 12.739 0 001.95 2.36c1.75 1.09 3.64 2.19 5.64 3.27 7.93 4.24 15.36 6.88 19.41 7.12a12.005 12.005 0 00-.66-2.46zM66.82 36.65a24.02 24.02 0 00-2.37-.88 20.32 20.32 0 00-3 7.94 15.33 15.33 0 015.39 8.61c.52 2.83.14 5.91 2.29 7.48.42-2 2.92-3.52 4.39-5.48a9.36 9.36 0 001.76-5.75C75.2 43.79 72 39 66.82 36.65zM54.4 96.35c-3.95-.11-6.62 5.59-7.74 11.72-1.12 6.13-1.19 13-2.44 19.06l.69 1.29a198.899 198.899 0 0134.75-13.12L60.74 99.82c-2.06-1.68-4.21-3.41-6.34-3.47z"
          fill="#BABA4A"
        />
        <Path
          d="M28.43 81.69c-3.9-4.91-9.66-5.93-14.84-6.6-4.46-.59-9-1.16-13.16 0C13.18 81 25.25 89.7 37.11 98.64l-1.82-2.23c-2.52-4.79-3.59-10.59-6.86-14.72z"
          fill="#CECB52"
        />
        <Path
          d="M41.51 97.5a114.637 114.637 0 0111.78-7.76c-4.34-1-8.87-.12-11.85 2.24a9.89 9.89 0 00-3.64 9 17.173 17.173 0 013.71-3.48z"
          fill="#BABA4A"
        />
        <Path
          d="M33.7 52c-1.42-7-5.77-12.47-10.56-15.06-4.79-2.59-10-2.64-14.86-1.74 1.12 3.56 3.25 6.32 5.28 9C21.71 54.86 29.59 66.67 34 81l.06-3c-.64-.72-1-5-.94-6.1.56-6.61 1.93-13.34.58-19.9z"
          fill="#CECB52"
        />
        <Path
          d="M55.91 55.38c-5.56-1.54-11.06.72-14.9 6.11l2.47.1c9.13 2 18.3 3.94 27.38 8.2-3.86-7.54-9.4-12.86-14.95-14.41zM47.51 51.22l1.1-1.73C48 42.32 53.31 36.22 50.19 29c-2.63-6-10.43-10.38-12.83-16.49l-4.43 5.84c-2 2.67-4.1 5.47-4.32 9-.25 4.06 2 8.52 5 12.35a44.38 44.38 0 0013.9 11.52z"
          fill="#BABA4A"
        />
        <Path
          d="M88.74 47.6a14.43 14.43 0 00-2.83-8.4c-4-5.57-11.6-8.32-19.28-6.22-8.37 2.29-16.16 8.21-18.08 17.26l-1.18 1.85c10.78-6.71 25.73-7.09 32.29-.66 2.92 2.86 5.06 6.83 8.76 6.7-1.19-2.73.32-6.86.32-10.53zM90.91 16.68c-4.89-2.06-10.58-2-14.73.1-3 1.54-5.14 4-7.2 6.45l.91-.46A15.29 15.29 0 0080.36 25 35 35 0 0090 21.89l6.51-2.83a47.27 47.27 0 01-5.6-2.38z"
          fill="#CECB52"
        />
        <Path
          d="M64.56 27.9l.56.41a11.74 11.74 0 003.42-5.84C70.19 15.87 66.73 8 63.36.85 63.2.51 63 .11 62.62 0a.82.82 0 00-.69.21 14.1 14.1 0 00-5.29 12.88c.49 5.24 3.46 10.78 7.92 14.81z"
          fill="#BABA4A"
        />
        <Path
          d="M48.45 103.8c.14 4.18 5.69 7.08 11.58 8.37.53.11 1.09.19 1.63.28 4.06-4.72 6.52-14.17 5.91-24.8 0-.84-.12-1.66-.2-2.47-.89-2.62-1.73-5.21-2.48-7.74L51.36 97.16c-1.47 2.15-2.98 4.39-2.91 6.64z"
          fill="#CECB52"
        />
        <Path
          d="M55.91 55.38a12.29 12.29 0 00-7.91.4c1.76 2.68 5.34 6.09 9.79 9.23a85.998 85.998 0 0113.07 4.78c-3.86-7.54-9.4-12.86-14.95-14.41z"
          fill="#BABA4A"
        />
        <Path
          d="M62.62 0a.82.82 0 00-.69.21 13.21 13.21 0 00-4.73 6.94c1.51 7.07 5.4 12.85 10.53 14.61.3.1.59.16.89.23C70 15.5 66.65 7.86 63.36.85 63.2.51 63 .11 62.62 0z"
          fill="#CECB52"
        />
        <Path
          d="M72.24 142c-10.25-4.36-38.47-4.44-53-.32-.08 12.27 6.94 33.76 12.22 46.74h31.77c4.44-16.7 11.08-41.74 9.01-46.42z"
          fill="#EACE86"
        />
        <Path
          d="M72.24 142c-8.92-3.79-31.45-4.34-46.75-1.71a48.011 48.011 0 00.1 4.93C27.1 166.6 41.8 184 58.44 184a23.337 23.337 0 006.18-.84c4.3-16.26 9.48-36.96 7.62-41.16z"
          fill="#F9DEA0"
        />
        <Path
          d="M64.74 142.22l-5.12-.68c-2.31-.31-4.32 1.06-4.42 3-.09 1.78 1.51 3.4 3.64 3.69l5.12.68c2.31.31 4.32-1.06 4.42-3 .09-1.78-1.51-3.4-3.64-3.69z"
          fill="#FCEAC8"
        />
        <Path
          d="M41 178.9l-2.7-2.27a3.39 3.39 0 00-4.12-.32c-.94.78-.79 2.14.34 3.09l2.71 2.27a3.39 3.39 0 004.11.32c.91-.78.76-2.14-.34-3.09zM34.33 172.23l-1.27-1.65a1.998 1.998 0 00-2.38-.69 1.159 1.159 0 00-.24 1.84l1.27 1.65a2.004 2.004 0 002.37.68 1.147 1.147 0 00.534-1.381 1.15 1.15 0 00-.284-.449z"
          fill="#EACE86"
        />
        <Path
          d="M68.51 155.79l.49-2.09a1.758 1.758 0 00-1.67-2 1.911 1.911 0 00-2.21 1.3l-.46 2.09a1.758 1.758 0 001.67 2 1.913 1.913 0 002.18-1.3zM50 141l-2.69-.06a1.784 1.784 0 00-1.452.575 1.787 1.787 0 00-.448 1.495 2.391 2.391 0 002.29 2l2.68.07a1.801 1.801 0 001.91-2.08 2.412 2.412 0 00-2.29-2z"
          fill="#FCEAC8"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1310_26270">
          <Path fill="#fff" d="M0 0H96.46V188.37H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default Tree
