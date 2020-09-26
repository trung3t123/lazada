import React, { Component } from 'react'
import { Text, View, FlatList, ImageBackground } from 'react-native'
import ItemView from '../ItemView'
import { connect } from 'react-redux'
import IMAGE from '../../../../Utils/ImageConstants';


export class PriceScreen extends Component {

	constructor(props) {
		super(props);

	}

	render() {
		if (this.props.product.listProducts <= 0) {
			return (
				<ImageBackground source={IMAGE.UNNAMED} style={{ flex: 1 }} resizeMode='contain' />
			)
		}
		return (
			<View style={{ padding: 20 }}>
				<FlatList
					data={this.props.product.listProducts}
					renderItem={({ item }) => (
						<ItemView
							key={item.product_id}
							product_id={item.product_id}
							title={item.title}
							image={item.image}
							price_vat={item.price_vat}
							sup_image={item.sup_image}
							location_name={item.location_name} />
					)}
				/>
			</View>
		)
	}
}

function mapStateToProps(state) {
	return {
		product: state.product
	}
}

// function mapDispatchToProps(dispatch) {
// 	return {
// 		fetchData : ''
// 	}
// }


export default connect(mapStateToProps, null)(PriceScreen)
