import React, {Component} from 'react';
import {connect} from 'react-redux';
//引用头部组件
import Xhead from '../components/base-components/xheader/xlist-header/xhead';
//引用relation内容主体组件
import Xrelaxation from '../components/person-components/relaxation/relaxation';
//引用排序组件
import Xsort from '../components/person-components/xsort/sort/xsort';
//
import Xsort_nav from '../components/person-components/xsort/sort_nav/sort_nav';
class Xrelaxing extends Component {
	
	componentWillMount(){
		this.props.sendNavData.bind(this)()
	}
	render() {
		return(
			<div>
				<div style={{marginBottom:"52px"}}>
					<Xhead/>
				</div>
				<Xsort_nav/>
				<Xsort/>
				<Xrelaxation/>	
			</div>
		);
	}
}
export default connect((state) => {
	return state
}, (dispatch) => {
	return {
			sendNavData:(e)=>{
				let self = this
			dispatch({
				type:'sendNavData',
				navImgurl:'https://img.piaoniu.com/icon/home/xxzl@3x.png',
				navText:'休闲展览'
			})
		}
	}
})(Xrelaxing);