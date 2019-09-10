import React from 'react';
import { Text, StyleSheet } from 'react-native';
import PropTypes, { oneOfType } from 'prop-types';
import { isAndroid } from '../utils/helpers';

const styles = StyleSheet.create({
  text: {
    // fontFamily: isAndroid ? 'Acumin-RPro' : null,
  },
});

interface Props {
  style: any;
  children : any,
  onPress: () =>{},
}

const TextN : React.FC<Props> = ({ onPress, style, children }) => (
  <Text onPress={onPress} style={[styles.text, style]}>
    {children}
  </Text>
);

TextN.defaultProps = {
  onPress: null,
  style: {},
  children: '',
};

TextN.propTypes = {
  onPress: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.number]),
};
export default TextN;