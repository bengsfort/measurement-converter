import React, { PropTypes, Component } from 'react';
import { View } from 'react-native';
import { Colors } from '../../Styles/Variables.styles';
import NavButton from '../../Components/NavButton/NavButton';
import Styles from './NavBar.styles';

class Result extends Component {
  render() {
    const { navigator, routes, route } = this.props;
    return (
      <View style={Styles.wrapper}>
        <NavButton 
          palette={Colors.purple} 
          label='Temperature'
          onPress={() => route.index !== 0
            ? navigator.pop()
            : false}
          style={Styles.button} />
        <NavButton 
          palette={Colors.green}
          label='Weight'
          onPress={() => route.index !== 1
            ? navigator.push(routes[1])
            : false} 
          style={Styles.button} />
      </View>
    );
  }
}

Result.propTypes = {
  route: PropTypes.object,
  routes: PropTypes.array,
  navigator: PropTypes.object,
};

export default Result;