import { Colors } from "./Colors";

export enum Gender {
  MALE = "male",
  FEMALE = "female",
  BOTH = "both",
}

export enum Species {
  DOG = "dog",
  CAT = "cat",
  BOTH = "both",
}

export const petGenderMap = {
  [Gender.MALE]: "ผู้",
  [Gender.FEMALE]: "เมีย",
  [Gender.BOTH]: "ทั้งสองเพศ",
};

export enum Theme {
  BLACK = "black",
  BROWN = "brown",
  GRAY = "gray",
  GREEN = "green",
  ORANGE = "orange",
  PURPLE = "purple",
  RED = "red",
  BLUE = "blue",
  YELLOW = "yellow",
  PINK = "pink",
  WATERMALON = "watermalon",
  PURPLESKY = "purpleSky",
  OCEANICBLUE = "OceanicBlue",
  DARKGREEN = "DarkGreen",
  PINKRED = "PinkRed",
  DARKGRAY = "DarkGray",
}

export const ImagePetCardLink = {
  [Theme.BLACK]: require("@/assets/images/card/black.png"),
  [Theme.BROWN]: require("@/assets/images/card/brown.png"),
  [Theme.GRAY]: require("@/assets/images/card/gray.png"),
  [Theme.GREEN]: require("@/assets/images/card/green.png"),
  [Theme.ORANGE]: require("@/assets/images/card/orange.png"),
  [Theme.PURPLE]: require("@/assets/images/card/purple.png"),
  [Theme.RED]: require("@/assets/images/card/red.png"),
  [Theme.BLUE]: require("@/assets/images/card/blue.png"),
  [Theme.YELLOW]: require("@/assets/images/card/yellow.png"),
  [Theme.PINK]: require("@/assets/images/card/pink.png"),
  [Theme.WATERMALON]: require("@/assets/images/card/watermalon.png"),
  [Theme.PURPLESKY]: require("@/assets/images/card/purpleSky.png"),
  [Theme.OCEANICBLUE]: require("@/assets/images/card/OceanicBlue.png"),
  [Theme.DARKGREEN]: require("@/assets/images/card/DarkGreen.png"),
  [Theme.PINKRED]: require("@/assets/images/card/PinkRed.png"),
  [Theme.DARKGRAY]: require("@/assets/images/card/DarkGray.png"),
};

export const ThemeOptions = [
  { label: "สีดำ", value: Theme.BLACK },
  { label: "สีน้ำตาล", value: Theme.BROWN },
  { label: "สีเทา", value: Theme.GRAY },
  { label: "สีเขียว", value: Theme.GREEN },
  { label: "สีส้ม", value: Theme.ORANGE },
  { label: "สีม่วง", value: Theme.PURPLE },
  { label: "สีแดง", value: Theme.RED },
  { label: "สีน้ำเงิน", value: Theme.BLUE },
  { label: "สีเหลือง", value: Theme.YELLOW },
  { label: "สีชมพู", value: Theme.PINK },
  { label: "สีแตงโม", value: Theme.WATERMALON },
  { label: "สีม่วงฟ้า", value: Theme.PURPLESKY },
  { label: "สีฟ้ามหาสมุทร", value: Theme.OCEANICBLUE },
  { label: "สีเขียวเข้ม", value: Theme.DARKGREEN },
  { label: "สีแดงอมชมพู", value: Theme.PINKRED },
  { label: "สีเทาเข้ม", value: Theme.DARKGRAY },
];

export const colorMapping: any = {
  1: Colors.light.semantic.alert,
  2: Colors.light.semantic.error,
  3: Colors.light.semantic.info,
  4: Colors.light.semantic.success,
  5: Colors.light.semantic.warning,
};

export enum Status {
  STRAY = "stray",
  PENDING = "pending",
  SUCCESSFUL = "successful",
}

export const PetSizeOptions = [
  { label: "เล็ก", value: "small" },
  { label: "กลาง", value: "medium" },
  { label: "ใหญ่", value: "large" },
];

export const DogBreedOptions = [
  { label: "หมาบ้าน", value: "หมาบ้าน" },
  { label: "ชิวาวา", value: "ชิวาวา" },
  { label: "ปอมเมอเรเนียน", value: "ปอมเมอเรเนียน" },
  { label: "ไซบีเรียน ฮัสกี้", value: "ไซบีเรียน ฮัสกี้" },
  { label: "โกลเด้น รีทรีฟเวอร์", value: "โกลเด้น รีทรีฟเวอร์" },
  { label: "ลาบราดอร์ รีทรีฟเวอร์", value: "ลาบราดอร์ รีทรีฟเวอร์" },
  { label: "บีเกิล", value: "บีเกิล" },
  { label: "ชิสุ", value: "ชิสุ" },
  { label: "ปั๊ก", value: "ปั๊ก" },
  { label: "บูลด็อก", value: "บูลด็อก" },
  { label: "เยอรมัน เชพเพิร์ด", value: "เยอรมัน เชพเพิร์ด" },
  { label: "ร็อตไวเลอร์", value: "ร็อตไวเลอร์" },
  { label: "โดเบอร์แมน", value: "โดเบอร์แมน" },
  { label: "พุดเดิ้ล", value: "พุดเดิ้ล" },
  { label: "ดัชชุน", value: "ดัชชุน" },
  { label: "แจ็ครัสเซลล์", value: "แจ็ครัสเซลล์" },
  { label: "คอร์กี้", value: "คอร์กี้" },
  { label: "บอร์เดอร์ คอลลี่", value: "บอร์เดอร์ คอลลี่" },
  { label: "มอลทีส", value: "มอลทีส" },
  { label: "เฟรนช์ บูลด็อก", value: "เฟรนช์ บูลด็อก" },
  { label: "อาคิตะ", value: "อาคิตะ" },
  { label: "เชา เชา", value: "เชา เชา" },
  { label: "บาสเซ็ต ฮาวด์", value: "บาสเซ็ต ฮาวด์" },
  { label: "อัลเซเชียน", value: "อัลเซเชียน" },
  {
    label: "คาวาเลียร์ คิง ชาลส์ สแปเนียล",
    value: "คาวาเลียร์ คิง ชาลส์ สแปเนียล",
  },
  { label: "ฮาวานิส", value: "ฮาวานิส" },
  { label: "เซนต์เบอร์นาร์ด", value: "เซนต์เบอร์นาร์ด" },
  { label: "ดัลเมเชียน", value: "ดัลเมเชียน" },
  { label: "ไทยบางแก้ว", value: "ไทยบางแก้ว" },
  { label: "ไทยหลังอาน", value: "ไทยหลังอาน" },
  { label: "อลาสกัน มาลามิวท์", value: "อลาสกัน มาลามิวท์" },
  { label: "เชทแลนด์ ชีพด็อก", value: "เชทแลนด์ ชีพด็อก" },
  { label: "ซามอยด์", value: "ซามอยด์" },
  { label: "เบอร์นีส เมาน์เทนด็อก", value: "เบอร์นีส เมาน์เทนด็อก" },
  { label: "เกรย์ฮาวด์", value: "เกรย์ฮาวด์" },
  { label: "อัฟกัน ฮาวด์", value: "อัฟกัน ฮาวด์" },
  { label: "ไทยบางแก้ว", value: "ไทยบางแก้ว" },
];

export const CatBreedOptions = [
  { label: "แมวบ้าน", value: "แมวบ้าน" },
  { label: "เปอร์เซีย", value: "เปอร์เซีย" },
  { label: "สก็อตติช โฟลด์", value: "สก็อตติช โฟลด์" },
  { label: "บริติช ช็อตแฮร์", value: "บริติช ช็อตแฮร์" },
  { label: "อเมริกัน ช็อตแฮร์", value: "อเมริกัน ช็อตแฮร์" },
  { label: "สยาม", value: "สยาม" },
  { label: "เมนคูน", value: "เมนคูน" },
  { label: "เบงกอล", value: "เบงกอล" },
  { label: "แร็กดอลล์", value: "แร็กดอลล์" },
  { label: "เอ็กโซติก ช็อตแฮร์", value: "เอ็กโซติก ช็อตแฮร์" },
  { label: "รัสเซียน บลู", value: "รัสเซียน บลู" },
  { label: "ออเรียนทอล ช็อตแฮร์", value: "ออเรียนทอล ช็อตแฮร์" },
  { label: "ไทย", value: "ไทย" },
  { label: "ชาร์ทเทรอ", value: "ชาร์ทเทรอ" },
  { label: "เบอร์แมน", value: "เบอร์แมน" },
  { label: "เดวอน เร็กซ์", value: "เดวอน เร็กซ์" },
  { label: "คอร์นิช เร็กซ์", value: "คอร์นิช เร็กซ์" },
  { label: "สฟิงซ์", value: "สฟิงซ์" },
  { label: "อเมริกัน เคิร์ล", value: "อเมริกัน เคิร์ล" },
  { label: "โซมารี", value: "โซมารี" },
  { label: "อาบิสซิเนียน", value: "อาบิสซิเนียน" },
  { label: "เซเรนเจติ", value: "เซเรนเจติ" },
  { label: "โอเรียนทอล ลองแฮร์", value: "โอเรียนทอล ลองแฮร์" },
  { label: "ซาวันนาห์", value: "ซาวันนาห์" },
  { label: "พิกซี่บ็อบ", value: "พิกซี่บ็อบ" },
  { label: "คาราคัล", value: "คาราคัล" },
  { label: "มังค์กิน", value: "มังค์กิน" },
  { label: "ลาเปิร์ม", value: "ลาเปิร์ม" },
  { label: "นอร์วีเจียน ฟอเรสต์", value: "นอร์วีเจียน ฟอเรสต์" },
  { label: "โซโคลอช", value: "โซโคลอช" },
  { label: "ไทยวิเชียรมาศ", value: "ไทยวิเชียรมาศ" },
];

export const DogVaccinationHistoryOptions = [
  {
    label: "วัคซีนป้องกันพิษสุนัขบ้า",
    value: "วัคซีนป้องกันพิษสุนัขบ้า",
    color: Colors.light.semantic.success,
  },
  {
    label: "วัคซีนป้องกันไข้หัดสุนัข",
    value: "วัคซีนป้องกันไข้หัดสุนัข",
    color: Colors.light.semantic.success,
  },
  {
    label: "วัคซีนป้องกันลำไส้อักเสบ",
    value: "วัคซีนป้องกันลำไส้อักเสบ",
    color: Colors.light.semantic.warning,
  },
  {
    label: "วัคซีนป้องกันโรคพาร์โวไวรัส",
    value: "วัคซีนป้องกันโรคพาร์โวไวรัส",
    color: Colors.light.semantic.warning,
  },
  {
    label: "วัคซีนป้องกันโรคตับอักเสบ",
    value: "วัคซีนป้องกันโรคตับอักเสบ",
    color: Colors.light.semantic.warning,
  },
  {
    label: "วัคซีนป้องกันเลปโตสไปโรซีส",
    value: "วัคซีนป้องกันเลปโตสไปโรซีส",
    color: Colors.light.semantic.warning,
  },
  {
    label: "วัคซีนรวมสุนัข 5 โรค",
    value: "วัคซีนรวมสุนัข 5 โรค",
    color: Colors.light.semantic.success,
  },
  {
    label: "วัคซีนป้องกันโรคไข้เลือดออกในสุนัข",
    value: "วัคซีนป้องกันโรคไข้เลือดออกในสุนัข",
    color: Colors.light.semantic.warning,
  },
  {
    label: "วัคซีนป้องกันพยาธิหนอนหัวใจ",
    value: "วัคซีนป้องกันพยาธิหนอนหัวใจ",
    color: Colors.light.semantic.success,
  },
  {
    label: "วัคซีนป้องกันเชื้อโคโรนาไวรัสในสุนัข",
    value: "วัคซีนป้องกันเชื้อโคโรนาไวรัสในสุนัข",
    color: Colors.light.semantic.info,
  },
  {
    label: "วัคซีนป้องกันโรคหวัดใหญ่ในสุนัข",
    value: "วัคซีนป้องกันโรคหวัดใหญ่ในสุนัข",
    color: Colors.light.semantic.info,
  },
  {
    label: "วัคซีนป้องกันโรคหอบหืดในสุนัข",
    value: "วัคซีนป้องกันโรคหอบหืดในสุนัข",
    color: Colors.light.semantic.warning,
  },
  {
    label: "วัคซีนป้องกันบาดทะยัก",
    value: "วัคซีนป้องกันบาดทะยัก",
    color: Colors.light.semantic.success,
  },
  {
    label: "วัคซีนป้องกันโรคเห็บหมัดในสุนัข",
    value: "วัคซีนป้องกันโรคเห็บหมัดในสุนัข",
    color: Colors.light.semantic.warning,
  },
  {
    label: "วัคซีนป้องกันโรคแบคทีเรียในสุนัข",
    value: "วัคซีนป้องกันโรคแบคทีเรียในสุนัข",
    color: Colors.light.semantic.info,
  },
  {
    label: "วัคซีนป้องกันโรคท้องเสียในสุนัข",
    value: "วัคซีนป้องกันโรคท้องเสียในสุนัข",
    color: Colors.light.semantic.warning,
  },
  {
    label: "วัคซีนป้องกันโรคตาแดงในสุนัข",
    value: "วัคซีนป้องกันโรคตาแดงในสุนัข",
    color: Colors.light.semantic.info,
  },
  {
    label: "วัคซีนป้องกันโรคหนองในในสุนัข",
    value: "วัคซีนป้องกันโรคหนองในในสุนัข",
    color: Colors.light.semantic.error,
  },
  {
    label: "วัคซีนป้องกันโรคเชื้อราในสุนัข",
    value: "วัคซีนป้องกันโรคเชื้อราในสุนัข",
    color: Colors.light.semantic.info,
  },
];

export const CatVaccinationHistoryOptions = [
  {
    label: "วัคซีนป้องกันพิษสุนัขบ้า",
    value: "วัคซีนป้องกันพิษสุนัขบ้า",
    color: Colors.light.semantic.success,
  },
  {
    label: "วัคซีนป้องกันโรคลิวคีเมียแมว",
    value: "วัคซีนป้องกันโรคลิวคีเมียแมว",
    color: Colors.light.semantic.warning,
  },
  {
    label: "วัคซีนป้องกันไข้หวัดแมว",
    value: "วัคซีนป้องกันไข้หวัดแมว",
    color: Colors.light.semantic.info,
  },
  {
    label: "วัคซีนรวมแมว 4 โรค",
    value: "วัคซีนรวมแมว 4 โรค",
    color: Colors.light.semantic.success,
  },
  {
    label: "วัคซีนป้องกันโรคหัดแมว",
    value: "วัคซีนป้องกันโรคหัดแมว",
    color: Colors.light.semantic.warning,
  },
  {
    label: "วัคซีนป้องกันโรคหอบหืดในแมว",
    value: "วัคซีนป้องกันโรคหอบหืดในแมว",
    color: Colors.light.semantic.warning,
  },
  {
    label: "วัคซีนป้องกันโรคพาร์โวไวรัสในแมว",
    value: "วัคซีนป้องกันโรคพาร์โวไวรัสในแมว",
    color: Colors.light.semantic.warning,
  },
  {
    label: "วัคซีนป้องกันเชื้อโคโรนาไวรัสในแมว",
    value: "วัคซีนป้องกันเชื้อโคโรนาไวรัสในแมว",
    color: Colors.light.semantic.info,
  },
  {
    label: "วัคซีนป้องกันลิวคีเมีย",
    value: "วัคซีนป้องกันลิวคีเมีย",
    color: Colors.light.semantic.warning,
  },
  {
    label: "วัคซีนป้องกันโรคไข้หวัดแมว",
    value: "วัคซีนป้องกันโรคไข้หวัดแมว",
    color: Colors.light.semantic.info,
  },
  {
    label: "วัคซีนป้องกันเชื้อพยาธิในแมว",
    value: "วัคซีนป้องกันเชื้อพยาธิในแมว",
    color: Colors.light.semantic.success,
  },
  {
    label: "วัคซีนป้องกันโรคท้องเสียในแมว",
    value: "วัคซีนป้องกันโรคท้องเสียในแมว",
    color: Colors.light.semantic.warning,
  },
  {
    label: "วัคซีนป้องกันโรคตาแดงในแมว",
    value: "วัคซีนป้องกันโรคตาแดงในแมว",
    color: Colors.light.semantic.info,
  },
  {
    label: "วัคซีนป้องกันโรคเห็บหมัดในแมว",
    value: "วัคซีนป้องกันโรคเห็บหมัดในแมว",
    color: Colors.light.semantic.warning,
  },
  {
    label: "วัคซีนป้องกันบาดทะยักในแมว",
    value: "วัคซีนป้องกันบาดทะยักในแมว",
    color: Colors.light.semantic.success,
  },
  {
    label: "วัคซีนป้องกันโรคแบคทีเรียในแมว",
    value: "วัคซีนป้องกันโรคแบคทีเรียในแมว",
    color: Colors.light.semantic.info,
  },
  {
    label: "วัคซีนป้องกันโรคหนองในในแมว",
    value: "วัคซีนป้องกันโรคหนองในในแมว",
    color: Colors.light.semantic.error,
  },
  {
    label: "วัคซีนป้องกันโรคเชื้อราในแมว",
    value: "วัคซีนป้องกันโรคเชื้อราในแมว",
    color: Colors.light.semantic.info,
  },
];

export const PetTagsOptions = [
  { label: "น่ารัก", value: "น่ารัก", color: Colors.light.semantic.success },
  { label: "ขี้เล่น", value: "ขี้เล่น", color: Colors.light.semantic.success },
  { label: "ฉลาด", value: "ฉลาด", color: Colors.light.semantic.success },
  { label: "กินเยอะ", value: "กินเยอะ", color: Colors.light.semantic.warning },
  { label: "นอนเยอะ", value: "นอนเยอะ", color: Colors.light.semantic.info },
  { label: "ดุ", value: "ดุ", color: Colors.light.semantic.error },
  { label: "ดื้อ", value: "ดื้อ", color: Colors.light.semantic.error },
  { label: "ไม่กัด", value: "ไม่กัด", color: Colors.light.semantic.success },
  { label: "กัด", value: "กัด", color: Colors.light.semantic.error },
  {
    label: "ซื่อสัตย์",
    value: "ซื่อสัตย์",
    color: Colors.light.semantic.success,
  },
  { label: "เงียบสงบ", value: "เงียบสงบ", color: Colors.light.semantic.info },
  { label: "ว่องไว", value: "ว่องไว", color: Colors.light.semantic.success },
  { label: "ชอบวิ่ง", value: "ชอบวิ่ง", color: Colors.light.semantic.success },
  { label: "ติดคน", value: "ติดคน", color: Colors.light.semantic.info },
  { label: "หวงของ", value: "หวงของ", color: Colors.light.semantic.warning },
  { label: "ขี้กลัว", value: "ขี้กลัว", color: Colors.light.semantic.alert },
  {
    label: "ชอบเล่นน้ำ",
    value: "ชอบเล่นน้ำ",
    color: Colors.light.semantic.success,
  },
  {
    label: "สุขภาพดี",
    value: "สุขภาพดี",
    color: Colors.light.semantic.success,
  },
  { label: "ขี้อ้อน", value: "ขี้อ้อน", color: Colors.light.semantic.info },
  { label: "กล้าหาญ", value: "กล้าหาญ", color: Colors.light.semantic.success },
  { label: "ขี้อาย", value: "ขี้อาย", color: Colors.light.semantic.alert },
  { label: "ชอบเห่า", value: "ชอบเห่า", color: Colors.light.semantic.warning },
  { label: "ชอบสำรวจ", value: "ชอบสำรวจ", color: Colors.light.semantic.info },
  { label: "นอนเก่ง", value: "นอนเก่ง", color: Colors.light.semantic.info },
  { label: "ร่าเริง", value: "ร่าเริง", color: Colors.light.semantic.success },
  { label: "มีเสน่ห์", value: "มีเสน่ห์", color: Colors.light.semantic.info },
  {
    label: "ชอบเดินเล่น",
    value: "ชอบเดินเล่น",
    color: Colors.light.semantic.success,
  },
  { label: "ขี้สงสัย", value: "ขี้สงสัย", color: Colors.light.semantic.alert },
  {
    label: "มีความอดทน",
    value: "มีความอดทน",
    color: Colors.light.semantic.success,
  },
  { label: "แข็งแรง", value: "แข็งแรง", color: Colors.light.semantic.success },
  { label: "ขนสวย", value: "ขนสวย", color: Colors.light.semantic.success },
  { label: "ตื่นตัว", value: "ตื่นตัว", color: Colors.light.semantic.warning },
  {
    label: "ชอบอยู่เงียบๆ",
    value: "ชอบอยู่เงียบๆ",
    color: Colors.light.semantic.info,
  },
  {
    label: "เป็นมิตร",
    value: "เป็นมิตร",
    color: Colors.light.semantic.success,
  },
  { label: "ขี้หวง", value: "ขี้หวง", color: Colors.light.semantic.warning },
  { label: "ขี้ร้อน", value: "ขี้ร้อน", color: Colors.light.semantic.error },
  { label: "ขี้หนาว", value: "ขี้หนาว", color: Colors.light.semantic.error },
  {
    label: "ชอบกินผัก",
    value: "ชอบกินผัก",
    color: Colors.light.semantic.success,
  },
  {
    label: "ขี้โวยวาย",
    value: "ขี้โวยวาย",
    color: Colors.light.semantic.alert,
  },
  { label: "ฉลาดมาก", value: "ฉลาดมาก", color: Colors.light.semantic.success },
  {
    label: "ขี้เกียจ",
    value: "ขี้เกียจ",
    color: Colors.light.semantic.warning,
  },
  {
    label: "มีพลังงานสูง",
    value: "มีพลังงานสูง",
    color: Colors.light.semantic.success,
  },
  {
    label: "ชอบออกกำลังกาย",
    value: "ชอบออกกำลังกาย",
    color: Colors.light.semantic.success,
  },
  {
    label: "ชอบเล่นของเล่น",
    value: "ชอบเล่นของเล่น",
    color: Colors.light.semantic.success,
  },
  {
    label: "ชอบนั่งตัก",
    value: "ชอบนั่งตัก",
    color: Colors.light.semantic.info,
  },
  {
    label: "หวงที่นอน",
    value: "หวงที่นอน",
    color: Colors.light.semantic.warning,
  },
  { label: "ชอบขุด", value: "ชอบขุด", color: Colors.light.semantic.success },
  {
    label: "ชอบปีนป่าย",
    value: "ชอบปีนป่าย",
    color: Colors.light.semantic.success,
  },
  { label: "ชอบแทะ", value: "ชอบแทะ", color: Colors.light.semantic.warning },
  {
    label: "เฝ้าบ้านเก่ง",
    value: "เฝ้าบ้านเก่ง",
    color: Colors.light.semantic.success,
  },
  { label: "ขี้อิจฉา", value: "ขี้อิจฉา", color: Colors.light.semantic.alert },
  {
    label: "รักเจ้าของ",
    value: "รักเจ้าของ",
    color: Colors.light.semantic.success,
  },
  { label: "ชอบอิสระ", value: "ชอบอิสระ", color: Colors.light.semantic.info },
  { label: "ขี้เหงา", value: "ขี้เหงา", color: Colors.light.semantic.alert },
  {
    label: "ไม่กลัวเสียงดัง",
    value: "ไม่กลัวเสียงดัง",
    color: Colors.light.semantic.success,
  },
  {
    label: "ชอบอยู่กับเด็ก",
    value: "ชอบอยู่กับเด็ก",
    color: Colors.light.semantic.success,
  },
  {
    label: "ไม่ชอบอยู่กับเด็ก",
    value: "ไม่ชอบอยู่กับเด็ก",
    color: Colors.light.semantic.error,
  },
  {
    label: "ชอบความท้าทาย",
    value: "ชอบความท้าทาย",
    color: Colors.light.semantic.success,
  },
  { label: "ฝึกง่าย", value: "ฝึกง่าย", color: Colors.light.semantic.success },
  { label: "ฝึกยาก", value: "ฝึกยาก", color: Colors.light.semantic.warning },
  { label: "ชอบล่า", value: "ชอบล่า", color: Colors.light.semantic.alert },
  {
    label: "ขี้ใจน้อย",
    value: "ขี้ใจน้อย",
    color: Colors.light.semantic.alert,
  },
  {
    label: "เชื่อฟัง",
    value: "เชื่อฟัง",
    color: Colors.light.semantic.success,
  },
  {
    label: "เล่นกับสัตว์อื่นได้",
    value: "เล่นกับสัตว์อื่นได้",
    color: Colors.light.semantic.success,
  },
  {
    label: "ไม่ชอบสัตว์อื่น",
    value: "ไม่ชอบสัตว์อื่น",
    color: Colors.light.semantic.error,
  },
  {
    label: "ชอบอากาศเย็น",
    value: "ชอบอากาศเย็น",
    color: Colors.light.semantic.success,
  },
  {
    label: "ชอบอากาศร้อน",
    value: "ชอบอากาศร้อน",
    color: Colors.light.semantic.warning,
  },
  {
    label: "สายพันธุ์นักล่า",
    value: "สายพันธุ์นักล่า",
    color: Colors.light.semantic.alert,
  },
  {
    label: "ดูแลง่าย",
    value: "ดูแลง่าย",
    color: Colors.light.semantic.success,
  },
  { label: "ดูแลยาก", value: "ดูแลยาก", color: Colors.light.semantic.warning },
  {
    label: "กลัวที่มืด",
    value: "กลัวที่มืด",
    color: Colors.light.semantic.alert,
  },
  {
    label: "กลัวความสูง",
    value: "กลัวความสูง",
    color: Colors.light.semantic.alert,
  },
  {
    label: "ชอบเดินป่า",
    value: "ชอบเดินป่า",
    color: Colors.light.semantic.success,
  },
  { label: "ชอบน้ำ", value: "ชอบน้ำ", color: Colors.light.semantic.success },
  { label: "ขี้หลง", value: "ขี้หลง", color: Colors.light.semantic.alert },
  {
    label: "หวงของเล่น",
    value: "หวงของเล่น",
    color: Colors.light.semantic.warning,
  },
  {
    label: "ชอบคาบของ",
    value: "ชอบคาบของ",
    color: Colors.light.semantic.success,
  },
  {
    label: "ชอบนอนใต้แสงแดด",
    value: "ชอบนอนใต้แสงแดด",
    color: Colors.light.semantic.success,
  },
  {
    label: "มีปฏิกิริยาไวต่อเสียง",
    value: "มีปฏิกิริยาไวต่อเสียง",
    color: Colors.light.semantic.warning,
  },
  {
    label: "ไม่กลัวคนแปลกหน้า",
    value: "ไม่กลัวคนแปลกหน้า",
    color: Colors.light.semantic.success,
  },
  { label: "คุยเก่ง", value: "คุยเก่ง", color: Colors.light.semantic.success },
  {
    label: "มีระเบียบ",
    value: "มีระเบียบ",
    color: Colors.light.semantic.success,
  },
  {
    label: "สอนให้ทำท่าได้",
    value: "สอนให้ทำท่าได้",
    color: Colors.light.semantic.success,
  },
];

export const DogGeneralHealthOptions = [
  { label: "โรคพิษสุนัขบ้า", value: "โรคพิษสุนัขบ้า" },
  { label: "โรคลำไส้อักเสบในสุนัข", value: "โรคลำไส้อักเสบในสุนัข" },
  { label: "โรคพาร์โวไวรัส", value: "โรคพาร์โวไวรัส" },
  { label: "โรคพยาธิหนอนหัวใจ", value: "โรคพยาธิหนอนหัวใจ" },
  { label: "โรคผิวหนังอักเสบ", value: "โรคผิวหนังอักเสบ" },
  { label: "โรคหัดสุนัข", value: "โรคหัดสุนัข" },
  { label: "โรคตับอักเสบ", value: "โรคตับอักเสบ" },
  { label: "โรคเลปโตสไปโรซีส", value: "โรคเลปโตสไปโรซีส" },
  { label: "โรคอ้วนในสุนัข", value: "โรคอ้วนในสุนัข" },
  { label: "ข้อสะโพกเสื่อม", value: "ข้อสะโพกเสื่อม" },
  { label: "ต้อกระจก", value: "ต้อกระจก" },
  { label: "การติดเชื้อทางเดินปัสสาวะ", value: "การติดเชื้อทางเดินปัสสาวะ" },
  { label: "โรคเห็บหมัด", value: "โรคเห็บหมัด" },
  { label: "โรคไตในสุนัข", value: "โรคไตในสุนัข" },
  { label: "โรคหัวใจในสุนัข", value: "โรคหัวใจในสุนัข" },
  { label: "ปัญหาการย่อยอาหาร", value: "ปัญหาการย่อยอาหาร" },
  { label: "โรคภูมิแพ้ในสุนัข", value: "โรคภูมิแพ้ในสุนัข" },
  { label: "โรคข้อต่อในสุนัข", value: "โรคข้อต่อในสุนัข" },
  { label: "โรคเบาหวานในสุนัข", value: "โรคเบาหวานในสุนัข" },
  { label: "โรคมะเร็งในสุนัข", value: "โรคมะเร็งในสุนัข" },
];

export const CatGeneralHealthOptions = [
  { label: "โรคไข้หวัดแมว", value: "โรคไข้หวัดแมว" },
  { label: "โรคลิวคีเมียแมว", value: "โรคลิวคีเมียแมว" },
  { label: "โรคเอดส์แมว", value: "โรคเอดส์แมว" },
  { label: "โรคพยาธิในแมว", value: "โรคพยาธิในแมว" },
  { label: "โรคหนองในแมว", value: "โรคหนองในแมว" },
  { label: "โรคเห็บหมัดในแมว", value: "โรคเห็บหมัดในแมว" },
  { label: "โรคทางเดินหายใจในแมว", value: "โรคทางเดินหายใจในแมว" },
  { label: "โรคไตในแมว", value: "โรคไตในแมว" },
  { label: "โรคตับในแมว", value: "โรคตับในแมว" },
  { label: "โรคเบาหวานในแมว", value: "โรคเบาหวานในแมว" },
  { label: "โรคหอบหืดในแมว", value: "โรคหอบหืดในแมว" },
  { label: "โรคผิวหนังในแมว", value: "โรคผิวหนังในแมว" },
  { label: "โรคข้ออักเสบในแมว", value: "โรคข้ออักเสบในแมว" },
  { label: "โรคอ้วนในแมว", value: "โรคอ้วนในแมว" },
  { label: "ปัญหาการย่อยอาหารในแมว", value: "ปัญหาการย่อยอาหารในแมว" },
  { label: "โรคมะเร็งในแมว", value: "โรคมะเร็งในแมว" },
  {
    label: "การติดเชื้อทางเดินปัสสาวะในแมว",
    value: "การติดเชื้อทางเดินปัสสาวะในแมว",
  },
  { label: "โรคเหงือกอักเสบในแมว", value: "โรคเหงือกอักเสบในแมว" },
  { label: "การติดเชื้อแบคทีเรียในแมว", value: "การติดเชื้อแบคทีเรียในแมว" },
];
