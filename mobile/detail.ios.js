'use strict';

var React = require('react-native');

var {
  Navigator,
  View,
  StyleSheet,
  Text
} = React;

var cssVar = require('cssVar');

function render() {
  return (
      <View style={styles.container}>
      <Text style={styles.welcome}>
      Teletubbies
    </Text>
      <Text style={styles.instructions}>
      Teletubbies is a British pre-school children's television series created by Ragdoll Productions' Anne Wood CBE and Andrew Davenport, who wrote each of the show's 365 episodes. It originally aired on BBC2 from 31 March 1997 to 16 February 2001.'
    </Text>
      <Text style={styles.instructions}>
      Tinky-Winky Dipsy Laa-Laa Po
    </Text>
      </View>
  );
}

var options = {
  render: render
};

var detail = React.createClass(options);

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});

module.exports = detail;
