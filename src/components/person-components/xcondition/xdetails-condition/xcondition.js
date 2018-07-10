import React, {Component} from 'react';
import {connect} from 'react-redux';
import './xcondition.css';

class Xcondition extends Component {
	render() {
		return (
			<div className="detail-pop">
				<div onClick={this.props.details.bind(this)} className="detail-pop__overlay"></div>
				<div className="detail-pop__main">
					<div className="detail-pop__content">
						<div className="status-detail">
							<div className="status-detail__title" style={{color: 'rgb(234, 54, 103)'}}><img src="https://static.piaoniu.com/nuxt-static/img/icon-presale.3e7d5ce.png" className="status-detail__icon"/><span>预售中</span></div>
							<div className="status-detail__desc">该项目尚在预售中。平台卖家将在项目主办方正式开票后第一时间为用户配票寄送。由于演出票务特殊性，预售订单一经下单，不接受无理由退款。平台保证有票，无票赔付。</div>
						</div>
					</div>
					<div onClick={this.props.details.bind(this)} className="detail-pop__close">关闭</div>
				</div>
			</div>
		)
	}
}

export default connect((state) => {
	return state
}, (dispatch) => {
	return {
		details: () => {
			dispatch({
				type: 'details',
				isShowDetails: false
			})
		}
	}
})(Xcondition);