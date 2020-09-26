import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CommonScreen from './components/CommonScreen/CommonScreen';
import NewScreen from './components/NewScreen/NewScreen';
import PriceScreen from './components/PriceScreen/PriceScreen';
import Back1 from '../../Icon/back (1).svg';
import Funnel from '../../Icon/funnel.svg';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { setFetchType, setKeyWord, fetchData, fetchProducts } from '../../redux/actions/product';


const Tab = createMaterialTopTabNavigator();

const styles = StyleSheet.create({
	screenContainer: {
		flex: 1,
	},
	headerSearchBarContainer: {
		width: '100%',
		height: 60,
		flexDirection: 'row',
		alignItems: 'center',
		padding: 10,
	},
	searchBar: {
		borderColor: '#a6c1f8',
		width: '80%',
		height: 40,
		paddingLeft:10,
		borderWidth: 1,
		borderRadius: 10,
		margin: 10,
	},
	navigationContainer: {
		flex: 1,
	}
})


export class SearchScreen extends Component {

	constructor(props) {
		super(props);
		this.state = {
			priceIconName: 'arrow-up',
			fetchType: 'price_esc'
		}
	}


	render() {
		const { priceIconName, fetchType } = this.state
		this.props.setFetchType(fetchType)
		return (
			<View style={styles.screenContainer}>
				<View style={styles.headerSearchBarContainer}>
					<TouchableOpacity onPress={() => this.props.navigation.goBack()}>
						<Back1 width={30} height={30} fill={'#35495e'} />
					</TouchableOpacity>
					<TextInput onChangeText={(value) => this.props.fetchData(fetchType,value)} style={styles.searchBar} />
					<TouchableOpacity onPress={() => this.props.navigation.navigate('FilterScreen')} >
						<Funnel width={30} height={30} fill={'#a6c1f8'} />
					</TouchableOpacity>
				</View>

				<View style={styles.navigationContainer} >
					<Tab.Navigator
						initialRouteName='Common'
						tabBarOptions={{

							showIcon: true,
							tabStyle: {
								paddingBottom: 10,
								flexDirection: 'row-reverse',
								justifyContent: 'center'
							},
							activeTintColor: '#a6c1f8',
							inactiveTintColor: '#898a8b',
							indicatorStyle: {
								width: '15%',
								left: '9%',
								backgroundColor: '#a6c1f8'
							},
							labelStyle: {
								textTransform: 'none'
							},
							style: {
								backgroundColor: 'white'
							}
						}} >
						<Tab.Screen name="Common" options={{ title: 'Phù hợp' }} component={CommonScreen} />
						<Tab.Screen name='New' options={{ title: 'Mới nhất' }} component={NewScreen} />
						<Tab.Screen name='Price'
							listeners={({ navigation, route }) => ({
								tabPress: e => {
									// if (route.state && route.state.routeNames.length > 0) {
									// 	navigation.navigate('Device')
									switch (priceIconName) {
										case ('arrow-up'):
											this.setState({ priceIconName: 'arrow-down', fetchType: 'price_dsc' });
											break;
										case ('arrow-down'):
											this.setState({ priceIconName: 'arrow-up', fetchType: 'price_esc' })
											break;
										default:
											break;
									}
								},
							})
							}
							options={{
								title: 'Giá',
								tabBarIcon: (tab) => (
									<Icon
										name={priceIconName} size={20} color={'#a6c1f8'}
									/>
								),

							}} component={PriceScreen} />
					</Tab.Navigator>
				</View>
			</View >
		)
	}
}

function mapStateToProps(state) {
	return {
		products: state.products
	}
}

function mapDispatchToProps(dispatch) {
	return {
		setFetchType: (fetchType) => dispatch(setFetchType(fetchType)),
		setKeyWord : (keyWord) => dispatch(setKeyWord(keyWord)),
		fetchData: (fetchType,value) => dispatch(fetchProducts(fetchType,value)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen)
