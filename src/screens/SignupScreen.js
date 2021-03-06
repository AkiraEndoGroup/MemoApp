import React from 'react';
import { StyleSheet, View, TextInput, Text, TouchableHighlight } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import firebase from 'firebase';

class SignupScreen extends React.Component {
  state = {
    email: '',
    password: '',
  }

  resetTo(route) {
    const actionToDispatch = StackActions.reset({
      index: 0,
      key: null,
      actions: [NavigationActions.navigate({ routeName: route })],
    });
    this.props.navigation.dispatch(actionToDispatch);
  }

  // eslint-disable-next-line
  handleSubmit() {
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        this.resetTo('Home');
      })
      .catch(() => {
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          メンバー登録
        </Text>
        <TextInput
          style={styles.input}
          value={this.state.email}
          onChangeText={(text) => { this.setState({ email: text }); }}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Email Address"
          underlineColorAndroid="transparent"
        />
        <TextInput
          style={styles.input}
          value={this.state.password}
          onChangeText={(text) => { this.setState({ password: text }); }}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Password"
          secureTextEntry
          underlineColorAndroid="transparent"
        />
        <TouchableHighlight style={styles.button} onPress={this.handleSubmit.bind(this)} underlayColor="#C70F66">
          <Text style={styles.buttonTitle}>送信する</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 24,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 28,
    alignSelf: 'center',
    marginBottom: 24,
  },
  input: {
    backgroundColor: '#eee',
    height: 40,
    margin: 16,
    borderWidth: 1,
    borderColor: '#DDD',
    padding: 8,
  },
  button: {
    backgroundColor: '#E31676',
    height: 48,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    alignSelf: 'center',
  },
  buttonTitle: {
    color: '#fff',
    fontSize: 18,
  },
});

export default SignupScreen;
