import { Colors } from "./Colors";

export enum EStatusPosts {
  SEEN_NEARBY = "seen_nearby",
  HELP_NEEDED = "help_needed",
}

export const PostsStatusMap = {
  [EStatusPosts.SEEN_NEARBY]: {
    label: "สงสัยว่าเป็นสัตว์จรจัด",
    color: Colors.light.semantic.warning,
  },
  [EStatusPosts.HELP_NEEDED]: {
    label: "ขอความช่วยเหลือ",
    color: Colors.light.semantic.error,
  },
};

export const statusPostsOptions = [
  {
    label: "สงสัยว่าเป็นสัตว์จรจัด",
    value: EStatusPosts.SEEN_NEARBY,
  },
  {
    label: "ขอความช่วยเหลือ",
    value: EStatusPosts.HELP_NEEDED,
  },
];

export const tagsPostTypeOptions = [
  { label: 'ช่วยเหลือสัตว์', value: 'ช่วยเหลือสัตว์' },
  { label: 'สัตว์หาย', value: 'สัตว์หาย' },
  { label: 'ตามหาสัตว์', value: 'ตามหาสัตว์' },
  { label: 'สัตว์ป่วย', value: 'สัตว์ป่วย' },
  { label: 'สัตว์บาดเจ็บ', value: 'สัตว์บาดเจ็บ' },
  { label: 'ต้องการอุปถัมภ์', value: 'ต้องการอุปถัมภ์' },
  { label: 'ขอรับบริจาคอาหาร', value: 'ขอรับบริจาคอาหาร' },
  { label: 'หาบ้านให้สัตว์', value: 'หาบ้านให้สัตว์' },
  { label: 'สัตว์ถูกรถชน', value: 'สัตว์ถูกรถชน' },
  { label: 'สัตว์ถูกทิ้ง', value: 'สัตว์ถูกทิ้ง' },
  { label: 'ต้องการหมอสัตว์', value: 'ต้องการหมอสัตว์' },
  { label: 'ช่วยหาที่พักพิง', value: 'ช่วยหาที่พักพิง' },
  { label: 'สัตว์ในเหตุภัยพิบัติ', value: 'สัตว์ในเหตุภัยพิบัติ' },
  { label: 'สัตว์ติดกับดัก', value: 'สัตว์ติดกับดัก' },
  { label: 'สัตว์หลงทาง', value: 'สัตว์หลงทาง' },
  { label: 'สัตว์มีบาดแผล', value: 'สัตว์มีบาดแผล' },
  { label: 'สัตว์ไม่มีบ้าน', value: 'สัตว์ไม่มีบ้าน' },
  { label: 'ช่วยเหลือฉุกเฉิน', value: 'ช่วยเหลือฉุกเฉิน' },
  { label: 'สัตว์ใกล้ตาย', value: 'สัตว์ใกล้ตาย' },
  { label: 'ค้นหาเจ้าของ', value: 'ค้นหาเจ้าของ' },
  { label: 'รับเลี้ยงชั่วคราว', value: 'รับเลี้ยงชั่วคราว' },
  { label: 'สัตว์ติดเชื้อ', value: 'สัตว์ติดเชื้อ' },
  { label: 'ช่วยเหลือสัตว์ต่างถิ่น', value: 'ช่วยเหลือสัตว์ต่างถิ่น' },
  { label: 'ปล่อยสัตว์คืนสู่ธรรมชาติ', value: 'ปล่อยสัตว์คืนสู่ธรรมชาติ' },
  { label: 'สัตว์โดนทำร้าย', value: 'สัตว์โดนทำร้าย' },
];
