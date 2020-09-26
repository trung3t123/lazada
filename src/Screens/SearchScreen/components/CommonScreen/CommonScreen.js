import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';



export class CommonScreen extends Component {
	render() {
		return (
			<View style={{flex: 1}} >
				<Text> textInComponent  asdas</Text>
				
				<Icon name='arrow-up' size={40} color={'black'}/>
				<Icon name='arrow-down' size={40} color={'black'}/>

			</View>
		)
	}
}

export default CommonScreen
