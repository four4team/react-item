import React, {Component} from 'react';

//列表公共头部
import Xhead from '../components/base-components/xheader/xlist-header/xhead';
//轮播图组件
import Xanimate from '../components/person-components/xanimate/xconcert-animate/xanimate';
//排序、日历总组件
import Xcolum from '../components/person-components/xcolum/xconcert-colum/xcolum';
//商品列表组件
import Xmain from '../components/person-components/xmain/xconcert-main/xmain';

class Xconcert extends Component {
	render() {
		return (
			<div style={{width:'100%'}}>
				<Xhead/>
				<Xanimate/>
				<Xcolum/>
				<Xmain/>
			</div>
		)
	}
}

export default Xconcert;

