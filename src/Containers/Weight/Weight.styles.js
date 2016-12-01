import { StyleSheet } from 'react-native';
import { Colors } from '../../Styles/Variables.styles';

const Styles = StyleSheet.create({
	wrapper: {
		flex: 1
	},
	top: {
		flex: 1,
		backgroundColor: Colors.green['600']
	},
	bottom: {
		flex: 1,
		backgroundColor: Colors.green['700']
	}
});

export default Styles;