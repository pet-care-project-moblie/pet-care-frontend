export const Colors = {
  light: {
    primary: {
      1: '#281C9D',
      2: '#5655B9',
      3: '#A8A3D7',
      4: '#F2F1F9',
    },
    neutral: {
      1: '#343434',
      2: '#898989',
      3: '#989898',
      4: '#CACACA',
      5: '#E0E0E0',
      6: '#FFFFFF',
    },
    semantic: {
      error: '#FF4267',
      warning: '#FFAF2A',
      success: '#52D5BA',
      info: '#0890FE',
      alert: '#FB6B18',
    },
  },
};

export interface ColorsType {
  light: {
    primary: {
      1: string;
      2: string;
      3: string;
      4: string;
    };
    neutral: {
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
      6: string;
      7: string;
    };
    semantic: {
      error: string;
      warning: string;
      success: string;
      info: string;
      alert: string;
    };
  };
}
