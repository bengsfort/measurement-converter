import { StyleSheet } from 'react-native';

export default function Theme (palette) {
	return StyleSheet.create({
		button: {
			flex: 1,
			height: 75,
			justifyContent: 'center',
			backgroundColor: palette['800']
		},
		label: {
			textAlign: 'center',
			fontSize: 18,
			color: palette['100']
		}
	});
}