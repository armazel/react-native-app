import React, { Component } from 'react';
import MyScence from './screens/MyScence';
import Main from './screens/Main';
import Second from './screens/Second';
import {StackNavigator} from 'react-navigation'
import {
    View,
} from 'react-native';


type Props = {};


const AppNavigator = StackNavigator({
    Main:{screen: Main},
    FirstScreen: {screen: MyScence},
    Second: {screen:Second}
});


export default class App extends Component<Props> {

constructor(props){
    super(props);

}


  render() {
      return (
         <View style={{flex: 1}}>
             <AppNavigator/>
         </View>
      );
  }
}
