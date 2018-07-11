import React,{Component} from 'react'
import $ from 'jquery'
//利用css modules实现了css模块化，避免css样式全局污染
import styles from './slide-list.scss'
import info from '../../../../static/JSON/home.json'
import Xmain_home from '../../xmain/xmain-home/xmain-home'

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
						return  <a className="kind" key={i}>
									<img src={item.imgurl}/>
									<p>{item.title}</p>
							    </a>
					})}
			</div>
		)
	}
	
}

export default XslideList
