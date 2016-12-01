import React, { PropTypes, Component } from 'react';
import { Text, TextInput, View, TouchableHighlight } from 'react-native';
import { Colors } from '../../Styles/Variables.styles';
import Theme from './Result.styles';

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      styles: Theme(props.palette)
    };
  }

  render() {
    const { styles } = this.state;

    return (
      <TouchableHighlight style={styles.wrapper} onPress={this.props.onPress}>
        <View style={styles.wrapper}>
          <Text style={styles.result}>
            {this.props.value}
          </Text>
          <Text style={styles.resultLabel}>
            {this.props.label}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }
}

Result.defaultProps = {
  value: '',
  palette: Colors.purple
};

Result.propTypes = {
  palette: PropTypes.object,
  value: PropTypes.string,
  onPress: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
};

export default Result;