import React, {Component} from 'react';
import {connect} from 'react-redux';
//日历列表组件
import { Calendar } from 'antd';
import styles from './xcalendar.scss';

function onPanelChange(value, mode) {
  console.log(value, mode);
}
class Xcalendar extends Component {
	render() {
		return (
			<div>
				<div onClick={this.props.calendar.bind(this)} className={styles.time_btn} style={{color:this.props.isShowCalendar?'#40a9ff':'#000'}}><i className="iconfont icon-arrowdown" style={{position:'absolute',right:0,top:'16%',fontSize:'12px'}}></i>全部时间</div>
				<div style={{display:this.props.isShowCalendar?'block':'none',width:'100%',borderTop:'1px solid #d9d9d9',borderBottom:'1px solid #d9d9d9',background:'#fff'}}>
				    <Calendar fullscreen={false} onPanelChange={onPanelChange} />
				</div>
			</div>
		)
	}
}

export default connect(function(state){
	return state
},function(dispatch){
	return {
		calendar:function(){
			dispatch({
				type: 'calendar',
				isShowCalendar: !this.props.isShowCalendar
			})
		}
	}
})(Xcalendar);


