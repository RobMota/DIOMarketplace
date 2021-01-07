import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#f3f3f3',
	},
	title: {
		fontSize: 30,
		textAlign: 'center',
		margin: 10,
	},
});

export default function App() {
	return (
		<>
			<View style={styles.container}>
				<Text style={styles.title}>Hello World</Text>
			</View>
		</>
	);
}
