import React, { Component } from 'react'
import { Text, View, StyleSheet, Button, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import Back1 from '../../Icon/back (1).svg';
import RangeSlider from 'rn-range-slider';
import { connect } from 'react-redux';
import { setFilters, fetchFilters } from '../../redux/actions/product';

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
	headerContainer: {
		height: 60,
		alignItems: 'center',
		flexDirection: 'row',
		padding: 20
	},
	contentContainer: {
		flex: 1,
		padding: 20,

	},
	categoryContainer: {
		flex: 1,
		borderBottomColor: '#b9b9b9',
		borderBottomWidth: 0.5,
		marginBottom: 10,
	},
	locationContainer: {
		flex: 1,
		borderBottomColor: '#b9b9b9',
		borderBottomWidth: 0.5,
		marginBottom: 10,
	},
	brandContainer: {
		flex: 1,
	},
	applyButton: {
		backgroundColor: '#6979f8',
		width: deviceWidth * 30 / 100,
		height: deviceHeight * 10 / 100,
		position: 'absolute',
		borderRadius: 15,
		bottom: 20,
		alignSelf: 'center',
		justifyContent: 'center',
		alignItems: 'center',
	},
	contentHeader: {
		fontSize: 18,
		fontWeight: '700',
	},
	categoryItemsContainer: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
		overflow: 'hidden',
		position: 'relative'
	},
	categoryItem: {
		alignItems: 'center',
		padding: 15,
		margin: 10,
		backgroundColor: '#d6d6d6'
	},
	rangeSlider: {
		height: 300,
		alignItems: 'center',
		flexDirection: 'row',
	}
})

class FilterScreen extends Component {

	constructor(props) {
		super(props);
		this.state = {
			categoryHeight: 170,
			filters: {
				lst_cate_id: '',
				lst_city_id: '',
				sup_id: '',
				lowPrice: '10000',
				highPrice: '10000000',
			}
		}
	}

	setFilter = () => {
		this.props.setFilters(this.state.filters);
		this.props.navigation.goBack();
	}

	render() {
		console.log('props', this.props.product);
		const { filters, categoryHeight } = this.state
		return (
			<View style={{ flex: 1, position: 'relative' }}>
				<View style={styles.headerContainer}>
					<TouchableOpacity onPress={() => this.props.navigation.goBack()} >
						<Back1 width={30} height={30} fill={'#35495e'} />
					</TouchableOpacity>
					<View style={{ width: '80%', height: '100%', justifyContent: 'center', alignItems: 'center' }} >
						<Text style={{ fontSize: 20, fontWeight: 'bold' }}>Lọc tìm kiếm</Text>
					</View>
				</View>
				<ScrollView>
					<View style={styles.contentContainer}>
						<View style={styles.categoryContainer}>
							<Text style={styles.contentHeader} >Danh Mục</Text>
							<View style={[styles.categoryItemsContainer, { height: categoryHeight }]}>
								{this.props.product.listFilters.filter_cate.map(filter => {
									return (
										<TouchableOpacity onPress={() => this.setState({ filter: { lst_cate_id: filter.id } })} style={styles.categoryItem}>
											<Text>{filter.name}</Text>
										</TouchableOpacity>
									)
								})}
							</View>

						</View>
						<View style={styles.locationContainer}>
							<Text style={styles.contentHeader}>Địa điểm</Text>
							<View style={styles.categoryItemsContainer}>
								{this.props.product.listFilters.filter_location.map(filter => {
									return (
										<TouchableOpacity onPress={() => this.setState({ filters: { lst_city_id: filter.id } })} style={styles.categoryItem}>
											<Text>{filter.name}</Text>
										</TouchableOpacity>
									)
								})}
							</View>
						</View>
						<View style={styles.brandContainer}>
							<Text style={styles.contentHeader}>Thương hiệu</Text>
							<View style={styles.categoryItemsContainer}>
								{this.props.product.listFilters.filter_sup.map(filter => {
									<TouchableOpacity onPress={() => this.setState({ filters: { sup_id: filter.id } })} style={styles.categoryItem}>
										<Text>{filter.name}</Text>
									</TouchableOpacity>
								})}

							</View>
						</View>

						<View>
							<Text style={styles.contentHeader}>Theo khoảng giá</Text>
							<View style={styles.rangeSlider}>
								<Text>{this.state.lowPrice} đ</Text>
								<RangeSlider
									style={{ width: 200, height: 80 }}
									min={10000}
									max={1000000}
									step={100000}
									selectionColor="#6979f8"
									blankColor="#b9b9b9"
									onValueChanged={(low, high, fromUser) => {
										this.setState({
											filters: {
												lowPrice: low,
												highPrice: high
											}
										})
									}}
								/>
								<Text>{this.state.highPrice} đ</Text>
							</View>
						</View>
					</View>

				</ScrollView>
				<TouchableOpacity onPress={this.setFilter} style={styles.applyButton}>
					<Text style={{ color: 'white', fontSize: 20 }}>Áp dụng</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

function mapStateToProps(state) {
	return {
		product: state.product
	}
}

function mapDispatchToProps(dispatch) {
	return {
		setFilters: (filters) => dispatch(setFilters(filters)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterScreen)