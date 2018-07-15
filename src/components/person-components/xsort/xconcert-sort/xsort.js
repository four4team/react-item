import React, {Component} from 'react';
import {connect} from 'react-redux';

//下拉列表组件
import { Menu, Dropdown, Icon } from 'antd';
import styles from './xsort.scss';

class Xsort extends Component {
	constructor(props){
		super(props);
		this.state = {
			menu:	<Menu>
						    <Menu.Item onClick={this.props.sort.bind(this,'综合排序')} key="0" >综合排序</Menu.Item>
							<Menu.Item onClick={this.props.sort.bind(this,'好评优先')} key="1">好评优先</Menu.Item>
						    <Menu.Item onClick={this.props.sort.bind(this,'高价优先')} key="3">高价优先</Menu.Item>
						    <Menu.Divider/>
						    <Menu.Item onClick={this.props.sort.bind(this,'最新优先')} key="4">最新优先</Menu.Item>
					</Menu>
		}
	}
	render() {
		return (
			<div>
				<Dropdown onClick={this.props.calendar.bind(this)} overlay={this.state.menu} trigger={['click']}>
				    <a className={styles.ant_dropdown_link} href="#">
				    {this.props.texts}<Icon type="down" />
				    </a>
				</Dropdown>
			</div>
		)
	}
}

export default connect(function(state){
	return state
},function(dispatch){
	return {
		sort:function(texts) {
			dispatch({
				type: 'sort',
				texts: texts
			})
		},
		calendar:function(){
			dispatch({
				type: 'calendar',
				isShowCalendar: false
			})
		}
	}
})(Xsort);
