import React, { Component } from 'react';
import { View,  StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import Text from './Text';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: 'white',
    fontSize: 15,
  },
  innerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 15,
  },
});

export default class ErrorHandler extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, info: null };
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true, info, error });
    console.log('error', error);
    console.log('info', info);
    // You can also log the error to an error reporting service
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return (
        <View style={styles.container}>
          <View style={styles.innerContainer}>
            <Text style={styles.textStyle}> BoilerPlate </Text>
          </View>
        </View>
      );
    }
    return children;
  }
}

ErrorHandler.propTypes = {
  children: PropTypes.element.isRequired,
};