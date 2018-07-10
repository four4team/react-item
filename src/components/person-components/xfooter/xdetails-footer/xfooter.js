import React, {Component} from 'react';
import './xfooter.css';

class Xfooter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [{
				src: 'https://static.piaoniu.com/nuxt-static/img/icon-zhenpiao2.6bf8fbd.png',
				text: '100%真票'
			},{
				src: 'https://static.piaoniu.com/nuxt-static/img/icon-danbao2.04d80c1.png',
				text: '担保交易'
			},{
				src: 'https://static.piaoniu.com/nuxt-static/img/icon-youpiao2.0df1e5e.png',
				text: '无票赔付'
			}]
		}
	}
	render() {
		return (
			<div>
				<div className="credit" style={{paddingLeft:0}}>
					<div className="hd"><span>票牛服务保障</span></div>
					<div className="items">
						{(function(self){
								return self.state.data.map(function(item,idx){
									return  <div className="credit-item" key={idx}>
												<img src={item.src} className="credit-icon"/>
												<span className="text">{item.text}</span>
											</div>
								})
							})(this)}
					</div>
				</div>
				<div className="bottom-container">
					<a href="#" className="custom-service">
						<div className="icon"></div>
						<div className="text">客服</div>
					</a>
					<div className="bottom-btn presale">这就预订</div>
					<div style={{display: 'none'}}>
						<div className="inform-success-pop">
							<div className="concern-success-icon"></div>
							<div className="concern-success-text">关注成功</div>
							<div className="inform-message">有票后我们会短信通知你～</div>
							<div className="confirm-btn pop-close">知道了</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Xfooter;
