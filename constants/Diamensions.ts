import { Dimensions as DimensionsReactNative } from 'react-native';

const { width, height } = DimensionsReactNative.get('window');

export const Dimensions = {
    percentageWidth: (percent: number) => (width * percent) / 100,
    percentageHeight: (percent: number) => (height * percent) / 100,
    width,
    height,
}