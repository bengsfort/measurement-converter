/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View, Navigator } from 'react-native';
import NavBar from './Containers/NavBar/NavBar';
import Temperature from './Containers/Temperature/Temperature';
import Weight from './Containers/Weight/Weight';

const Routes = [
  { title: 'Temperature', index: 0 },
  { title: 'Weight', index: 1 }
];

export default class App extends Component {
  render() {
    return (
      <Navigator
        initialRoute={Routes[0]}
        initialRouteStack={Routes}
        renderScene={(route, navigator) => {
          let body;
          if (route.index === 0) {
            body = (<Temperature style={{flex: 3}} />);
          } else {
            body = (<Weight style={{flex: 3}} />);
          }

          return (
            <View style={{flex: 1}}>
              {body}
              <NavBar 
                navigator={navigator} 
                route={route} 
                routes={Routes} />
            </View>
          );
        }}
        configureScene={(route, routeStack) => Navigator.SceneConfigs.PushFromRight} />
    );
  }
}