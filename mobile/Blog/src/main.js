import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
	ListView,
	TabBarIOS,
	NavigatorIOS
} from 'react-native';

import Home from './components/home'
import Tags from './components/tags'
import Search from './components/search'
import About from './components/about'

import Dimensions from 'Dimensions';

const {width, height, scale} = Dimensions.get('window');

const tabBarTitle = {
	home: {
		tab: '主页',
		nav: '欧长坤的博客',
		icon: '../assets/tabbar/home.png'
	},
	tags: {
		tab: '标签',
		nav: '标签云',
		icon: '../assets/tabbar/tags.png'
	},
	search: {
		tab: '搜索',
		nav: '内容搜索',
		icon: '../assets/tabbar/search.png'
	},
	about: {
		tab: '关于',
		nav: '关于我',
		icon: '../assets/tabbar/about.png'
	}
}

export default class Main extends Component {
	constructor() {
		super();
		this.state = {
			selectedTabBarItem: 'home'
		};
	}
	render() {
		return (
			<TabBarIOS
				tintColor='#FF6600'
			>
				<TabBarIOS.Item 
					title={tabBarTitle.home.tab}
					icon={require('../assets/tabbar/home.png')}
					selected={this.state.selectedTabBarItem === 'home'}
					onPress={()=>{this.setState({selectedTabBarItem: 'home'})}}
					renderAsOriginal={false}
				>
					<NavigatorIOS
						initialRoute={{
							component: Home,
							title: tabBarTitle.home.nav,
						}}
						style={styles.container}
					/>
				</TabBarIOS.Item>
				<TabBarIOS.Item 
					title={tabBarTitle.tags.tab}
					icon={require('../assets/tabbar/tags.png')}
					selected={this.state.selectedTabBarItem === 'tags'}
					onPress={()=>{this.setState({selectedTabBarItem: 'tags'})}}
					renderAsOriginal={false}
				>
					<NavigatorIOS
						initialRoute={{
							component: Tags,
							title: tabBarTitle.tags.nav,
						}}
						style={styles.container}
					/>
				</TabBarIOS.Item>
				<TabBarIOS.Item 
					title={tabBarTitle.search.tab}
					icon={require('../assets/tabbar/search.png')}
					selected={this.state.selectedTabBarItem === 'search'}
					onPress={()=>{this.setState({selectedTabBarItem: 'search'})}}
					renderAsOriginal={false}
				>
					<NavigatorIOS
						initialRoute={{
							component: Search,
							title: tabBarTitle.search.nav,
						}}
						style={styles.container}
					/>
				</TabBarIOS.Item>
				<TabBarIOS.Item 
					title={tabBarTitle.about.tab}
					icon={require('../assets/tabbar/about.png')}
					selected={this.state.selectedTabBarItem === 'about'}
					onPress={()=>{this.setState({selectedTabBarItem: 'about'})}}
					renderAsOriginal={false}
				>
					<NavigatorIOS
						initialRoute={{
							component: About,
							title: tabBarTitle.about.nav,
						}}
						style={styles.container}
					/>
				</TabBarIOS.Item>
			</TabBarIOS>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
})