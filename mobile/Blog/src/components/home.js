import React, { Component } from 'react';
import {
	StyleSheet,
	ListView,
	Text,
	View,
	Image,
	TouchableOpacity,
	AlertIOS,
	TabBarIOS,
	NavigatorIOS
} from 'react-native';
import Dimensions from 'Dimensions';
let {width, height, scale} = Dimensions.get('window');

export default class Home extends Component {
	constructor() {
		super();
		this.state = {
			dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
		};
	}
	componentDidMount() {
		this.loadPostFromNet();
	}
	loadPostFromNet() {
		return fetch('https://changkun.us/api/posts.json')
			.then((response) => {
				return response.json()
			})
			.then((responseJson) => {
				console.log(responseJson)
				this.setState({
					dataSource: this.state.dataSource.cloneWithRows(responseJson.data)
				})
				return responseJson.data
			})
			.catch((error) => {
				console.log(error)
			})
	}
	render() {
		return (
			<ListView
				dataSource = {this.state.dataSource}
				renderRow = {this.renderRow}
				backgroundColor = '#F5F5F5'
			/>
		)
	}
	renderRow(rowData, sectionID, rowID, highlightRow) {
		// 解析简介，过滤 tag 和图片
		let excerpt = rowData.excerpt ? rowData.excerpt
									.replace(/\<(?!img|br).*?\>/g, "")
									.replace(/\r?\n|\r/g, '')
									.replace(/<img(.*)>/g, ' [图片] ')
									.substring(0, 100) : ''
		
		// 解析正文，提取文中图片
		let rex = /<img[^>]+src="?([^"\s]+)"(.*)>/g;
		let results = rex.exec(rowData.content)
		let imgURL = null
		if (results !== null)
			imgURL = results[1]
		
		// 解析 tag list
		tag_list = '/ '
		rowData.tags.forEach((tag) => {
			tag_list += tag.name + ' / '
		})

		return (
			<TouchableOpacity onPress={() => {AlertIOS.alert('点击了'+rowData.title)}}>
			<View style={styles.cell}>
				<View style={styles.contents}>
					<Text style={{fontSize: 15, fontWeight: 'bold', color: '#FF6600'}}>{rowData.title}</Text>
					{
						excerpt.length > 0 && 
						<Text style={{marginTop: 10, marginBottom: 10, color: '#666666'}} numberOfLines={3}>{excerpt}</Text>
					}
				</View>
				{imgURL && <Image source={{uri: 'https://changkun.us'+imgURL}} style={styles.cover}/>}
				<View style={styles.tag}>
					<Text style={{color: 'gray'}}>{rowData.date.split('T')[0]}</Text>
					<Text style={{color: 'cornflowerblue'}}>{tag_list}</Text>
				</View>
			</View>
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	cell: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'flex-start',
		marginTop: 10,
		backgroundColor: '#FFFFFE',
		paddingTop: 10,
		paddingBottom: 10,
		borderStyle: 'solid',
		borderTopWidth: 1,
		borderBottomWidth: 1,
		borderColor: '#EEEEEE',
	},
	cover: {
		width: width,
		height: 120
	},
	contents: {
		alignSelf: 'center',
		width: width*0.9,
		justifyContent: 'center',
	},
	tag: {
		paddingTop: 10,
		paddingLeft: (width*0.1)/2,
		paddingRight: (width*0.1)/2,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	}
})