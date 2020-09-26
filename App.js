/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	StatusBar,
} from 'react-native';

import {
	Header,
	LearnMoreLinks,
	Colors,
	DebugInstructions,
	ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import SearchScreen from './src/Screens/SearchScreen/SearchScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FilterScreen from './src/Screens/FilterScreen/FilterScreen';
import { Provider } from 'react-redux';
import store from './src/redux/store';

console.disableYellowBox = true
const Stack = createStackNavigator();


const App: () => React$Node = () => {
	return (
		<>
			<StatusBar barStyle="dark-content" />
			<Provider store={store}>
				<NavigationContainer>
					<SafeAreaView style={{ flex: 1 }} >
						<Stack.Navigator initialRouteName="SearchScreen" headerMode='none'>
							<Stack.Screen name="SearchScreen" component={SearchScreen} />
							<Stack.Screen name="FilterScreen" component={FilterScreen} />
						</Stack.Navigator>
					</SafeAreaView>
				</NavigationContainer>
			</Provider>
		</>
	);
};

const styles = StyleSheet.create({
	scrollView: {
		backgroundColor: Colors.lighter,
	},
	engine: {
		position: 'absolute',
		right: 0,
	},
	body: {
		backgroundColor: Colors.white,
	},
	sectionContainer: {
		marginTop: 32,
		paddingHorizontal: 24,
	},
	sectionTitle: {
		fontSize: 24,
		fontWeight: '600',
		color: Colors.black,
	},
	sectionDescription: {
		marginTop: 8,
		fontSize: 18,
		fontWeight: '400',
		color: Colors.dark,
	},
	highlight: {
		fontWeight: '700',
	},
	footer: {
		color: Colors.dark,
		fontSize: 12,
		fontWeight: '600',
		padding: 4,
		paddingRight: 12,
		textAlign: 'right',
	},
});

export default App;
