import * as React from "react";
import Svg, { Path } from "react-native-svg";

interface Props {
  size: number; // รับขนาดเดียว
}

function FlagOfThailand({ size }: Props) {
  const width = size; // กำหนดความกว้างเป็น `size`
  const height = (2 / 3) * size; // คำนวณความสูงให้สัมพันธ์กับสัดส่วน 3:2

  return (
    <Svg width={width} height={height} viewBox="0 0 900 600">
      {/* พื้นหลังสีแดง */}
      <Path fill="#A51931" d="M0 0H900V600H0z" />
      {/* บล็อกสีขาว */}
      <Path fill="#F4F5F8" d="M0 100H900V500H0z" />
      {/* บล็อกสีน้ำเงิน */}
      <Path fill="#2D2A4A" d="M0 200H900V400H0z" />
    </Svg>
  );
}

export default FlagOfThailand;
