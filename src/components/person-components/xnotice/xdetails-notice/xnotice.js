import React, {Component} from 'react';
import {connect} from 'react-redux';
import './xnotice.css';


class Xnotice extends Component {
	constructor(props){
		super(props);
		this.state = {
			data: [{
				title: '入场时间',
				details: '演出前约90分钟'
			},{
				title: '限购说明',
				details: '每单限购6张'
			},{
				title: '座位类型',
				details: '请按门票对应座位，有序对号入座'
			},{
				title: '儿童入场提示',
				details: '儿童凭票入场'
			},{
				title: '禁止携带物品',				
				details: '食品、饮料、相机、充电宝、打火机等'
			},{
				title: '其他说明',
				details: '无寄存处，请自行保管携带物品'
			}],
			html: <i className="iconfont icon-check-circle"></i>,
			attr: true
		}
	}
	showattr() {
		this.setState({
			attr: true
		})
	}
	showNotice() {
		console.log(6)
		this.setState({
			attr: false
		})
	}
	render() {
		return (
			<div className="detail-pop">
				<div onClick={this.props.notice.bind(this)} className="detail-pop__overlay"></div>
				<div className="detail-pop__main">
					<div className="detail-pop__content">
						<div className="tip-detail">
							<div className="tip-detail__tabs">
								<div onClick={this.showattr.bind(this)} className={this.state.attr?'tip-detail__tab active':'tip-detail__tab'}>入场凭证</div>
								<div onClick={this.showNotice.bind(this)} className={this.state.attr?'tip-detail__tab':'tip-detail__tab active'}>观演须知</div>
							</div>
							<div className="tip-detail__desc" style={{display:this.state.attr?'block':'none'}}>
								<div className="tip-detail__item">
									<div className="tip-detail__item-title"><i className="iconfont icon-check-circle"></i>实体票</div>
									<div className="tip-detail__item-desc">本项目支持凭实体票入场，支持以下取票方式：<br/>- 快递配送：运费10元(V2及以上会员包邮)，顺丰发货。<br/>- 上门自提：前往门店自取，门店店址 上海市徐汇区零陵路685号105室票牛网直营店(星期一至星期五：9:00 - 18:00，星期六：10:00 - 17:00（节假日除外）)。<br/>- 现场取票：票牛工作人员将在演出开场前1小时至现场派票。工作人员联系方式、具体取票地点将在演出当天以短信通知发送至预留的手机号。<br/></div>
								</div>
							</div>
							<div className="tip-detail__desc" style={{display:this.state.attr?'none':'block'}}>
								{(function(self){
										return self.state.data.map(function(item,idx){
											return  <div className="tip-detail__item" key={idx}>
														<div className="tip-detail__item-title">{self.state.html}{item.title}</div>
														<div className="tip-detail__item-desc">{item.details}</div>
													</div>
										})
									})(this)}
							</div>
						</div>
					</div>
					<div onClick={this.props.notice.bind(this)} className="detail-pop__close">关闭</div>
				</div>
			</div>
		)
	}
}

export default connect((state) => {
	return state
}, (dispatch) => {
	return {
		notice: () => {
			dispatch({
				type: 'notice',
				isShowNotice: false
			})
		}
	}
})(Xnotice);
