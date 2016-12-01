import React, { PropTypes, Component } from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import { Colors } from '../../Styles/Variables.styles';
import Theme from './NavButton.styles';

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: Theme(props.palette)
    };
  }

  render() {
    return (
      <TouchableHighlight 
        activeOpacity={.75}
        underlayColor={this.props.palette['900']}
        style={this.state.theme.button} 
        onPress={this.props.onPress}>
          <Text style={this.state.theme.label}>
            {this.props.label}
          </Text>
      </TouchableHighlight>
    );
  }
}

Result.defaultProps = {
  palette: Colors.purple
};

Result.propTypes = {
  palette: PropTypes.object,
  onPress: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
};

export default Result;