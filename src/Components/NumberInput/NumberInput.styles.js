import { StyleSheet } from 'react-native';

const Styles = {
	wrapper: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'transparent',
	},
	input: {
		flex: 2,
		height: 150,
		textAlign: 'right',
		fontSize: 75,
		backgroundColor: 'transparent'
	},
	label: {
		flex: 1,
		textAlign: 'left',
		fontSize: 75,
	}
};

export default function Theme (palette) {
	Styles.input.color = palette['100'];
	Styles.label.color = palette['200'];
	return StyleSheet.create(Styles);
}