export enum ENewsType {
    VIRUS = 'virus',
    VACCINE = 'vaccine',
    MEDICINE = 'medicine',
  }
  
  export const newsTypeOptions = [
    { label: 'ไวรัส', value: ENewsType.VIRUS },
    { label: 'วัคซีน', value: ENewsType.VACCINE },
    { label: 'ยา', value: ENewsType.MEDICINE },
  ];