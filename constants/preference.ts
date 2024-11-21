export enum AccommodationType {
    HOUSE = "house",
    APARTMENT = "apartment",
    DORMITORY = "dormitory",
    OTHER = "other",
  }
  
  export const accommodationOptions = [
    { label: "บ้าน", value: AccommodationType.HOUSE },
    { label: "อพาร์ตเมนต์", value: AccommodationType.APARTMENT },
    { label: "หอพัก", value: AccommodationType.DORMITORY },
    { label: "อื่นๆ", value: AccommodationType.OTHER },
  ];
  
  export const lifestyleOptions = [
    { label: "ชอบนอน", value: "ชอบนอน" },
    { label: "ชอบเที่ยว", value: "ชอบเที่ยว" },
    { label: "ชอบอ่านหนังสือ", value: "ชอบอ่านหนังสือ" },
    { label: "ชอบออกกำลังกาย", value: "ชอบออกกำลังกาย" },
    { label: "ชอบเล่นกีฬา", value: "ชอบเล่นกีฬา" },
    { label: "ชอบทำอาหาร", value: "ชอบทำอาหาร" },
    { label: "ชอบดูหนัง", value: "ชอบดูหนัง" },
    { label: "ชอบฟังเพลง", value: "ชอบฟังเพลง" },
    { label: "ชอบเดินป่า", value: "ชอบเดินป่า" },
    { label: "ชอบเล่นดนตรี", value: "ชอบเล่นดนตรี" },
    { label: "ชอบวาดรูป", value: "ชอบวาดรูป" },
    { label: "ชอบปลูกต้นไม้", value: "ชอบปลูกต้นไม้" },
    { label: "ชอบทำงานฝีมือ", value: "ชอบทำงานฝีมือ" },
    { label: "ชอบตกปลา", value: "ชอบตกปลา" },
    { label: "ชอบแต่งบ้าน", value: "ชอบแต่งบ้าน" },
    { label: "ชอบเดินห้าง", value: "ชอบเดินห้าง" },
    { label: "ชอบนั่งชิล", value: "ชอบนั่งชิล" },
    { label: "ชอบกาแฟ", value: "ชอบกาแฟ" },
    { label: "ชอบการทำสวน", value: "ชอบการทำสวน" },
    { label: "ชอบท่องเที่ยวต่างประเทศ", value: "ชอบท่องเที่ยวต่างประเทศ" },
    { label: "ชอบทำบุญ", value: "ชอบทำบุญ" },
    { label: "ชอบการผจญภัย", value: "ชอบการผจญภัย" },
    { label: "ชอบการเรียนรู้", value: "ชอบการเรียนรู้" },
    { label: "ชอบการวางแผนการเงิน", value: "ชอบการวางแผนการเงิน" },
    { label: "ชอบช่วยเหลือสังคม", value: "ชอบช่วยเหลือสังคม" },
    { label: "ชอบการถ่ายรูป", value: "ชอบการถ่ายรูป" },
    { label: "ชอบการฝึกสมาธิ", value: "ชอบการฝึกสมาธิ" },
    { label: "ชอบการดูแลสัตว์เลี้ยง", value: "ชอบการดูแลสัตว์เลี้ยง" },
    { label: "ชอบทานอาหารญี่ปุ่น", value: "ชอบทานอาหารญี่ปุ่น" },
    { label: "ชอบเล่นเกม", value: "ชอบเล่นเกม" },
    { label: "ชอบการทำอาหารเพื่อสุขภาพ", value: "ชอบการทำอาหารเพื่อสุขภาพ" },
    { label: "ชอบการออกแบบ", value: "ชอบการออกแบบ" },
    { label: "ชอบความเรียบง่าย", value: "ชอบความเรียบง่าย" },
    { label: "ชอบความหรูหรา", value: "ชอบความหรูหรา" },
    { label: "ชอบเสี่ยงทาย", value: "ชอบเสี่ยงทาย" },
    { label: "ชอบการวิเคราะห์", value: "ชอบการวิเคราะห์" },
    { label: "ชอบการเรียนรู้เทคโนโลยี", value: "ชอบการเรียนรู้เทคโนโลยี" },
    { label: "ชอบการถ่ายวิดีโอ", value: "ชอบการถ่ายวิดีโอ" },
  ];
  
  export const personalityOptions = [
    { label: "อารมณ์ดี", value: "อารมณ์ดี" },
    { label: "ใจเย็น", value: "ใจเย็น" },
    { label: "ใจร้อน", value: "ใจร้อน" },
    { label: "ขี้เล่น", value: "ขี้เล่น" },
    { label: "ขี้สงสัย", value: "ขี้สงสัย" },
    { label: "ขี้หงุดหงิด", value: "ขี้หงุดหงิด" },
    { label: "รักสนุก", value: "รักสนุก" },
    { label: "มองโลกในแง่ดี", value: "มองโลกในแง่ดี" },
    { label: "มองโลกในแง่ร้าย", value: "มองโลกในแง่ร้าย" },
    { label: "มีความอดทน", value: "มีความอดทน" },
    { label: "มั่นใจในตัวเอง", value: "มั่นใจในตัวเอง" },
    { label: "ชอบเข้าสังคม", value: "ชอบเข้าสังคม" },
    { label: "ชอบความเป็นส่วนตัว", value: "ชอบความเป็นส่วนตัว" },
    { label: "จริงจัง", value: "จริงจัง" },
    { label: "ชอบความเรียบง่าย", value: "ชอบความเรียบง่าย" },
    { label: "ใจดี", value: "ใจดี" },
    { label: "ขี้อาย", value: "ขี้อาย" },
    { label: "กล้าหาญ", value: "กล้าหาญ" },
    { label: "ขยัน", value: "ขยัน" },
    { label: "ขี้เกียจ", value: "ขี้เกียจ" },
    { label: "รักความสะอาด", value: "รักความสะอาด" },
    { label: "เป็นมิตร", value: "เป็นมิตร" },
    { label: "ชอบความท้าทาย", value: "ชอบความท้าทาย" },
    { label: "ชอบความเสี่ยง", value: "ชอบความเสี่ยง" },
    { label: "มีความคิดสร้างสรรค์", value: "มีความคิดสร้างสรรค์" },
    { label: "เป็นคนละเอียด", value: "เป็นคนละเอียด" },
    { label: "พูดเก่ง", value: "พูดเก่ง" },
    { label: "เงียบ", value: "เงียบ" },
    { label: "ร่าเริง", value: "ร่าเริง" },
    { label: "ซื่อสัตย์", value: "ซื่อสัตย์" },
    { label: "ขี้สงสาร", value: "ขี้สงสาร" },
    { label: "ช่างสังเกต", value: "ช่างสังเกต" },
    { label: "มั่นคง", value: "มั่นคง" },
    { label: "มีน้ำใจ", value: "มีน้ำใจ" },
    { label: "ช่างฝัน", value: "ช่างฝัน" },
    { label: "มุ่งมั่น", value: "มุ่งมั่น" },
    { label: "รักอิสระ", value: "รักอิสระ" },
    { label: "คิดบวก", value: "คิดบวก" },
    { label: "รอบคอบ", value: "รอบคอบ" },
  ];
  