import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import NumberInput from '../../Components/NumberInput/NumberInput';
import Result from '../../Components/Result/Result';
import Styles from './Temperature.styles';

class Temperature extends Component {
	constructor(props) {
	  super(props);

	  this.state = {
	  	farenheit: '',
	  	celcius: '',
	  	editing: 'f',
	  	autoFocus: false
	  };
	}

	farenheitToCelcius (farenheit) {
		let celcius = (farenheit - 32) / 1.8;
		this.setState({
			farenheit: farenheit,
			celcius: (Math.round(celcius * 10) / 10).toFixed(1),
			editing: false
		});
	}

	celciusToFarenheit (celcius) {
		let farenheit = celcius * 1.8 + 32;
		this.setState({
			farenheit: farenheit.toFixed(1),
			celcius: celcius,
			editing: false
		});
	}

	buildTop () {
		const { state } = this;
		const label = String.fromCharCode(176) +'F';
		if (state.editing && state.editing === 'f') {
			return (
				<NumberInput 
					focus={this.state.autoFocus} 
					placeholder='32.0'
					label={label}
					onChange={this.farenheitToCelcius.bind(this)}
				/>
			);
		} else {
			return (
				<Result value={this.state.farenheit} onPress={() => this.setState({ editing: 'f', autoFocus: true })} label={label} />
			);
		}
	}

	buildBottom () {
		const { state } = this;
		const label = String.fromCharCode(176) +'C';
		if (state.editing && state.editing === 'c') {
			return (
				<NumberInput 
					focus={this.state.autoFocus} 
					placeholder='0.0'
					label={label}
					onChange={this.celciusToFarenheit.bind(this)}
				/>
			);
		} else {
			return (
				<Result value={this.state.celcius} onPress={() => this.setState({ editing: 'c', autoFocus: true })} label={label} />
			);
		}
	}

	render () {
		return (
			<View style={Styles.wrapper}>
				<View style={Styles.top}>
					{this.buildTop()}
				</View>
				<View style={Styles.bottom}>
					{this.buildBottom()}
				</View>
			</View>
		);
	}
}


export default Temperature;