import React, {Component} from 'react';

//排序列表组件
import Xsort from '../../xsort/xconcert-sort/xsort';
//日历组件
import Xcalendar from '../../xcalendar/xconcert-calendar/xcalendar';

class Xcolum extends Component {
	render() {
		return (
			<div style={{position:'relative',width:'93%',height:'24px',backgroundImage:'-webkit-linear-gradient(left,#FF2693,#ddd)',marginLeft:'13px'}}>
				<Xsort/>
				<Xcalendar/>
				<div style={{position:'absolute',right:'10px',top:'10%',color:'#000'}}>在线选座</div>
			</div>
		)
	}
}

export default Xcolum;

