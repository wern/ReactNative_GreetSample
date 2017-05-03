import React from 'react';
import {
  AppRegistry,
  Text,
  TextInput,
  View,
  Button,
  Image,
} from 'react-native'; 
/* import Text from 'react-native'; */
import { StackNavigator } from 'react-navigation';

/*Todo: in eigene Komponenten rausziehen */
class EnterScreen extends React.Component {
  static navigationOptions = {
    title: 'Eingabe',
  };
  constructor(props) {
    super(props);
    this.state = {name: 'Nobody',
                  nameReserve: 'r&#252;ckwaerts'};
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',    
        alignItems: 'center'
      }}>
      <View style={{
        alignItems: 'center',
        justifyContent: 'center',
        }}>
        <Text style={{padding:10}}>Wie heisst DU?</Text>
        <TextInput
          style={{padding:10, height: 40, width: 300}}
          placeholder="Dein Name"
          onChangeText={(name) => this.process(name)}
         /* onChangeText={(name) => this.setState({name: name, nameReserve: 'fff'})}*/
        />
        </View>
        <Button style={{padding:10}}
          onPress={() => navigate('Greet', this.state)}
          title="Weiter"
        />
      </View>
    );
  }
  process(nameEntered){
      var nameReversed = nameEntered.split('').reverse().join('');
      this.setState({name: nameEntered, nameReserve: nameReversed});
  }
}

class GreetScreen extends React.Component {
  static navigationOptions = {
    // Nav options can be defined as a function of the navigation prop:
    title: ({ state }) => `Gruss`,
  };
  render() {
    // The screen's current route is passed in to `props.navigation.state`:
    const { params } = this.props.navigation.state;
    const { goBack } = this.props.navigation;
    
    return (
      <View style={{
        flex: 1,
        justifyContent: 'flex-start',
        flexDirection: 'column',    
        alignItems: 'center',
      }}>
        <View style={{
        justifyContent: 'center',
        alignItems: 'center',
        padding:20,
       }}>
        <Text>Hallo {params.name}!</Text>
        <Text>Dein Name r&#252;ckw&#228;rts: {params.nameReserve} </Text>
        </View>
        <View style={{
        justifyContent: 'center',
        alignItems: 'center',
        padding:20,
        }}>
        <Image style={{padding:10}}
            source={require('./img/Beany.png')}
            style={{width: 100}}/>
            </View>
        <View style={{
        alignItems: 'center',
        justifyContent: 'center',
        }}>
        <Button style={{padding:10}}
          onPress={() => goBack()}
          title="Zur&#252;ck"
        />
        </View>
      </View>
    );
  }
}

const GreetApp = StackNavigator({
  Enter: { screen: EnterScreen },
  Greet: { screen: GreetScreen },
});

AppRegistry.registerComponent('GreetApp', () => GreetApp);