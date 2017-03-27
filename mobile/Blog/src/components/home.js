import React, { Component } from 'react';
import {
	StyleSheet,
	ListView,
	Text,
	View,
	Image,
	TouchableOpacity,
	AlertIOS,
	TabBarIOS
} from 'react-native';
import Dimensions from 'Dimensions';

let {width, height, scale} = Dimensions.get('window');
let posts = require('../../assets/api/posts.json')

export default class Home extends Component {
	constructor() {
		super();
		console.log(posts)
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			dataSource: ds.cloneWithRows(posts.data),
		};
	}
	render() {
		return (
			<View>
				<ListView
					dataSource = {this.state.dataSource}
					renderRow = {this.renderRow}
				/>
				<TabBarIOS>
				</TabBarIOS>
			</View>
		)
	}
	renderRow(rowData, sectionID, rowID, highlightRow) {
		console.log(rowData.tags[0].name)
		return (
			<TouchableOpacity onPress={() => {AlertIOS.alert('点击了'+rowData.title)}}>
			<View style={styles.cell}>
				<Image source={require('../../assets/logo.png')} style={styles.cover}/>
				<View style={styles.contents}>
					<Text >{rowData.title}</Text>
					<Text style={{color: 'gray', marginTop: 10}}>{rowData.date.split('T')[0]}</Text>
					<View style={styles.tag}>
						<Text style={{color: 'lightsteelblue'}}>{rowData.tags[0].name}</Text>
					</View>
				</View>
			</View>
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	cell: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		marginTop: 10,
		backgroundColor: 'white',
		padding: 10
	},
	cover: {
		width: width*0.2,
		height: width*0.2 
	},
	contents: {
		marginLeft: 10,
		width: width*0.7,
		justifyContent: 'center'
	},
	tag: {
		borderRadius: 2, 
		// backgroundColor: 'lightgoldenrodyellow',
	}
})