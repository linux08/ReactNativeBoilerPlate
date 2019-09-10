import React from 'react';
import { ActivityIndicator, View,StyleSheet } from 'react-native';
import PropTypes from 'prop-types';


const styles = StyleSheet.create({
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


interface SpinnerProps {
  size: number | 'small' | 'large';
  color: string;
}
// : React.FC<SpinnerProps>
const Spinner  = ({ size, color }) => (
  <View style={styles.spinnerStyle}>
    <ActivityIndicator size={size || 'large'} color={color || 'yellow'} />
  </View>
);

Spinner.defaultProps = {
  size: 'large',
  color: 'yellow',
};

Spinner.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
};

export default Spinner;