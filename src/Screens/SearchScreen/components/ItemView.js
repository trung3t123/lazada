import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions, Image } from 'react-native'
import IMAGE from '../../../Utils/ImageConstants';
import PlaceHolder from '../../../Icon/placeholder.svg';
import ShoppingCart from '../../../Icon/shopping-cart.svg';
import ViewSVG from '../../../Icon/view.svg';
import Bookmark from '../../../Icon/bookmark.svg';



const deviceHeight = Dimensions.get('screen').height;
const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
	itemContainer: {
		position: 'relative',
		marginBottom: 20,
		height: deviceHeight * 27 / 100,
		width: '100%',
		borderRadius: 5,
		borderWidth: 0.5,
		borderColor: '#999999',
		backgroundColor: 'white',

	},
	itemContentContainer: {
		flex: 4,
		flexDirection: 'column',
		backgroundColor: 'white',
		borderRadius: 5,

	},
	itemContent: {
		flex: 6,
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: 'white',
		borderRadius: 5

	},
	itemStatus: {
		paddingLeft: 10,
		flex: 1,
		flexDirection: 'row',
		backgroundColor: 'white',
		alignItems: 'center',
	},
	itemDetails: {
		flex: 2,
		flexDirection: 'column'
	},
	itemOptionsContainer: {
		flex: 1,
		backgroundColor: 'white',
		flexDirection: 'row',
		alignItems: 'center',
		paddingLeft: 20,
		borderRadius: 5
	}
})

export class ItemView extends Component {
	constructor(props) {
		super(props);

	}

	render() {
		return (
			<View style={styles.itemContainer} >

				<View style={styles.itemContentContainer}>
					<View style={styles.itemContent}>
						{/* image */}
						<Image source={{ uri: this.props.image }} style={{ height: '60%', flex: 1, resizeMode: 'contain' }} />
						<View style={styles.itemDetails}>
							<Text numberOfLines={2} style={{ fontSize: 19, fontWeight: 'bold' }}>
								{this.props.title}
							</Text>
							<Text style={{ textDecorationLine: 'line-through' }}>
								{this.props.price_vat} đ
							</Text>
							<View style={{ flexDirection: 'row' }}>

								<Text style={{ flex: 1, fontSize: 15, fontWeight: 'bold', color: 'red' }}>
									{this.props.price_vat} đ
								</Text>
								<View style={{ flexDirection: 'row-reverse' }}>
									<ShoppingCart width={30} height={30} fill={'#b9babb'} />
								</View>
							</View>
						</View>
					</View>
					<View style={styles.itemStatus}>
						<View style={{ flex: 1, flexDirection: 'row' }} >
							<PlaceHolder width={20} height={20} fill={'#b9babb'} />
							<Text style={{ color: '#b9babb' }}>{this.props.location_name}</Text>
						</View>
						<View style={{ flex: 1, flexDirection: 'row-reverse' }}>
							<Text style={{ color: '#b9babb', paddingRight: 10 }}> {this.props.product_id} lượt xem</Text>
							<ViewSVG width={20} height={20} fill={'#b9babb'} />
						</View>
					</View>
					<View style={{
						position: 'absolute',
						top: -9,
						right: 20
					}}>
						<Bookmark width={20} height={20} />
					</View>
				</View>
				<View style={styles.itemOptionsContainer}>
					<Text style={{ fontSize: 14 }}> Nơi bán :</Text>
					<Image style={{ marginLeft: 30, width: 100, height: 60, resizeMode: 'contain' }} source={{ uri: this.props.sup_image }}></Image>
				</View>
			</View >
		)
	}
}

export default ItemView
