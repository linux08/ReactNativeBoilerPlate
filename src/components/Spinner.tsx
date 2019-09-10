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



interface Props {
  size?:  number | "small" | "large"
  color?: string;
}
const Spinner: React.FC<Props>  = ({ size, color }) => (
  <View style={styles.spinnerStyle}>
    <ActivityIndicator size={size} color={color || 'yellow'} />
  </View>
);

Spinner.defaultProps = {
  size: "large",
  color: 'yellow',
};

Spinner.propTypes = {
  color: PropTypes.string,
};

export default Spinner;