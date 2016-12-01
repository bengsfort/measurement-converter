import React, { PropTypes, Component } from 'react';
import { Text, TextInput, View } from 'react-native';
import { Colors } from '../../Styles/Variables.styles';
import Theme from './NumberInput.styles';

class NumberInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      styles: Theme(props.palette)
    };
  }

  render() {
    const { styles } = this.state;

    return (
      <View style={styles.wrapper}>
        <TextInput style={styles.input}
          editable={true}
          autoFocus={this.props.focus}
          maxLength={5}
          blurOnSubmit={true}
          defaultValue={this.props.value}
          placeholder={this.props.placeholder}
          placeholderTextColor={this.props.palette['500']}
          underlineColorAndroid='transparent'
          autoCorrect={false}
          keyboardType='numeric'
          returnKeyType='go'
          onSubmitEditing={event => this.props.onChange(event.nativeEvent.text)}
        />
        <Text style={styles.label}>
          {this.props.label}
        </Text>
      </View>
    );
  }
}

NumberInput.defaultProps = {
  placeholder: '00.0',
  palette: Colors.purple,
  value: '',
  focus: false
};

NumberInput.propTypes = {
  focus: PropTypes.bool,
  palette: PropTypes.object,
  placeholder: PropTypes.string,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default NumberInput;