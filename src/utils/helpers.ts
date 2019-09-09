import { Platform, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

export const isAndroid = Platform.OS === 'android';

export const extraSmallScreen = height < 568;
export const smallScreen = height < 667;