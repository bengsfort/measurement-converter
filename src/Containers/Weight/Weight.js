import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import NumberInput from '../../Components/NumberInput/NumberInput';
import Result from '../../Components/Result/Result';
import { Colors } from '../../Styles/Variables.styles';
import Styles from './Weight.styles';

class Weight extends Component {
	constructor(props) {
	  super(props);

	  this.state = {
	  	lbs: '',
	  	kgs: '',
	  	editing: 'lbs',
	  	autoFocus: false
	  };
	}

	calculateKgs (lbs) {
		this.setState({
			lbs: lbs,
			kgs: (lbs * .45359237).toFixed(2),
			editing: false
		});
	}

	calculateLbs (kgs) {
		this.setState({
			kgs: kgs,
			lbs: (kgs / .45359237).toFixed(2),
			editing: false
		});
	}

	buildTop () {
		const { state } = this;
		const label = 'lbs';
		if (state.editing && state.editing === label) {
			return (
				<NumberInput palette={Colors.green}
					focus={this.state.autoFocus} 
					placeholder='0.0'
					label={label}
					onChange={this.calculateKgs.bind(this)}
				/>
			);
		} else {
			return (
				<Result palette={Colors.green} onPress={() => this.setState({ editing: label, autoFocus: true })} value={this.state.lbs} label={label} />
			);
		}
	}

	buildBottom () {
		const { state } = this;
		const label = 'kgs';
		if (state.editing && state.editing === label) {
			return (
				<NumberInput palette={Colors.green}
					focus={this.state.autoFocus} 
					placeholder='0.0'
					label={label}
					onChange={this.calculateLbs.bind(this)}
				/>
			);
		} else {
			return (
				<Result palette={Colors.green} onPress={() => this.setState({ editing: label, autoFocus: true })} value={this.state.kgs} label={label} />
			);
		}
	}

	render() {
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


export default Weight;