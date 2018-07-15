import React,{ Component } from 'react'
import {connect} from 'react-redux'
//引进页面基本组件
import Xkind_header from '../components/base-components/xheader/xkind-header/xkind-header'
import Xsort from '../components/base-components/for-user/xsort/xsort'
import Common_list from '../components/base-components/xlist/common-list/common-list'
//为用户引进的组件
import Pop from '../components/base-components/for-user/pop/pop'
import Xloading from '../components/base-components/for-user/xloading/xloading'
import Back_top from '../components/base-components/for-user/back-top/back-top'
import Part_list from '../components/base-components/xlist/part-list/part-list'

class Xchild extends Component{
	render(){
		return (
			<div style={{height:'100%',background:'#fff'}}>
				<Xkind_header/>
				<Xsort/>
				<Pop/>
				<div style={{display:!this.props.isShowSearchPop?'block':'none'}}>
					<Common_list types="children" isrequest='true'/>
				</div>
				<div style={{display:this.props.isShowSearchPop?'block':'none'}}>
					<Part_list kind="children" field={this.props.search}/>
				</div>
				<Xloading/>
				<Back_top/>
			</div>
		)
	}
}

export default connect((state)=>{
	return state
},(dispatch)=>{
	return {
	}
})(Xchild)