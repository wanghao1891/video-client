/**
 * The examples provided by Facebook are for non-commercial testing and
 * evaluation purposes only.
 *
 * Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN
 * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  Navigator,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
} = React;

var NavigationBarSample = require('./detail.ios');

class NavButton extends React.Component {
  render() {
    return (
      <TouchableHighlight
        style={styles.button}
        underlayColor="#B5B5B5"
        onPress={this.props.onPress}>
        <Text style={styles.buttonText}>{this.props.text}</Text>
      </TouchableHighlight>
    );
  }
}

class NavMenu extends React.Component {
  render() {
    return (
      <ScrollView style={styles.scene}>
        <Text style={styles.messageText}>{this.props.message}</Text>
        <NavButton
          onPress={() => {
            this.props.navigator.push({ id: 'navbar' });
          }}
          text="Teletubbies"
        />
      </ScrollView>
    );
  }
}

function render() {
  return (
      <Navigator
    style={styles.container}
    initialRoute={{ message: 'Video for Kids' }}
    renderScene={this.render_scene}
    configureScene={(route) => {
      if (route.sceneConfig) {
        return route.sceneConfig;
      }
      return Navigator.SceneConfigs.FloatFromBottom;
    }}
      />
  );
}

function render_scene(route, nav) {
  console.log('route:', route, 'nav:', nav);
  switch (route.id) {
  case 'navbar':
    return <NavigationBarSample navigator={nav} />;
  case 'breadcrumbs':
    return <BreadcrumbNavSample navigator={nav} />;
  case 'jumping':
    return <JumpingNavSample navigator={nav} />;
  default:
    return (
        <NavMenu
      message={route.message}
      navigator={nav}
      onExampleExit={this.props.onExampleExit}
        />
    );
  }
}

var options = {
  render: render,
  render_scene: render_scene
};

var mobile = React.createClass(options);

var styles = StyleSheet.create({
  messageText: {
    fontSize: 17,
    fontWeight: '500',
    padding: 15,
    marginTop: 50,
    marginLeft: 15
  },
  container: {
    flex: 1
  },
  button: {
    backgroundColor: 'white',
    padding: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#CDCDCD'
  },
  buttonText: {
    fontSize: 17,
    fontWeight: '500'
  },
  scene: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#EAEAEA'
  }
});

AppRegistry.registerComponent('mobile', () => mobile);
