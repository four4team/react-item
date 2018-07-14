import React,{Component} from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import $ from 'jquery'
//利用css modules实现了css模块化，避免css样式全局污染
import styles from './slide-list.scss'
import info from '../../../../static/JSON/home.json'
import Xmain_home from '../../xmain/xmain-home/xmain-home'
//对比<a>,Link组件避免了不必要的重渲染

class XslideList extends Component{
	constructor(props){
		super(props);
		this.state = {
			list: info[this.props.listName]
		}
	}
	render(){
		return (
			<div className={styles.home_entries}>
					{this.state.list.map((item,i)=>{
						return  <Link to={info.pages[i]} key={i} className="kind" onClick={this.clear}>
									<img src={item.imgurl}/>
									<p>{item.title}</p>
							    </Link>
					})}
			</div>
		)
	}
	
	clear(){
		$(window).off('scroll');
	}
	
}

export default XslideList
