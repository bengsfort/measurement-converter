import { StyleSheet } from 'react-native';

const Styles = {
	wrapper: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
	result: {
		flex: 2,
		height: 150,
		textAlign: 'right',
		fontSize: 75,
	},
	resultLabel: {
		flex: 1,
		height: 150,
		textAlign: 'left',
		fontSize: 75,
	}
};

export default function Theme (palette) {
	Styles.result.color = palette['100'];
	Styles.resultLabel.color = palette['200'];
	return StyleSheet.create(Styles);
}