import React,{Component} from 'react'
import {connect} from 'react-redux'
import $ from 'jquery'
import info from '../static/JSON/home.json'

//引入首页一系列功能组件 ———— 每一个文件夹对应每一个组件(组件里分清了自己的js和css[modules]) 
import Xheader_home from '../components/base-components/xheader/xheader-home/xheader-home'
import XslideList from '../components/base-components/xlist/slide-list/slide-list'
import Xbanner from '../components/base-components/xbanner/common-banner/common-banner'
import Xpush from '../components/base-components/xlist/one-and-two-list/one-and-two-list'
import Xmain_home from '../components/base-components/xmain/xmain-home/xmain-home'
import Common_list from '../components/base-components/xlist/common-list/common-list'
//为用户
import Back_top from '../components/base-components/for-user/back-top/back-top' 
import Xloading from '../components/base-components/for-user/xloading/xloading'
import Xglobal_search from '../components/base-components/for-user/xglobal-search/xglobal-search'

class Home extends Component {
	constructor(props){
		super(props);
		this.state = {
			
		}
	}
	render(){
		return (
			<div style={{overflowX:"hidden"}}>
				<Xheader_home />
				<XslideList listName="kind_list"></XslideList>
				<div style={{padding:"0 14px"}}>
					<Xbanner imgs={info.banner}></Xbanner>
					<Xpush list={info.recommend}></Xpush>
				</div>
				<Xmain_home/>
				<Back_top/>
				<div style={{paddingTop:"38px"}}>
					<h3 style={{fontSize: "18px",color: "#565656",padding: "0 14px"}}>猜你喜欢</h3>
					<Common_list types="guess_like"></Common_list>
				</div>
				<Xloading/>
				<Xglobal_search/>
			</div>
		)
	}
	componentDidMount(){
		
	}
}

export default Home
