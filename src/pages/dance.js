import React, {Component} from 'react';
import {connect} from 'react-redux';
//引用头部组件
import Xhead from '../components/base-components/xheader/xlist-header/xhead';
//引用dance内容主体组件
import Xdance from '../components/person-components/dance/dance';
//引用sort_nav组件
import Xsort_nav from '../components/person-components/xsort/sort_nav/sort_nav';
import Xsort from '../components/person-components/xsort/sort/xsort';
//import Common_list from '../components/base-components/xlist/common-list/common-list';
//import Xloading from '../components/base-components/for-user/xloading/xloading';
class Xdancing extends Component {
	  constructor(props) {
        super(props);
        this.state = {

        }
    }
	componentWillMount(){
		this.props.sendNavData.bind(this)()
	}
	render() {
		return(
			<div>
				<div style={{marginBottom:"48px"}}>
					<Xhead/>
				</div>
				<Xsort_nav/>
				<Xsort/>
				<Xdance/>
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
				navImgurl:'https://img.piaoniu.com/icon/home/wdbl@3x.png',
				navText:'舞蹈芭蕾'
			})
		}
	}
})(Xdancing); 