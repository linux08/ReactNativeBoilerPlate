import React from 'react';
import { Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { isAndroid } from '../utils/helpers';

const styles = StyleSheet.create({
  text: {
    // fontFamily: isAndroid ? 'Acumin-RPro' : null,
  },
});

const TextN = ({ onPress, style, children }) => (
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