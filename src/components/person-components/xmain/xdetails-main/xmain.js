import React, {Component} from 'react';
import {connect} from 'react-redux';
import Xnotice from '../../xnotice/xdetails-notice/xnotice';
import Xdetails from '../../xcondition/xdetails-condition/xcondition';
import './xmain.css';

class Xmain extends Component {
	constructor(props){
		super(props);
		this.state = {
			data: [
				'https://static.piaoniu.com/nuxt-static/img/starGrey.eefc1c0.png',
				'https://static.piaoniu.com/nuxt-static/img/starGrey.eefc1c0.png',
				'https://static.piaoniu.com/nuxt-static/img/starGrey.eefc1c0.png',
				'https://static.piaoniu.com/nuxt-static/img/starGrey.eefc1c0.png',
				'https://static.piaoniu.com/nuxt-static/img/starGrey.eefc1c0.png'
			],
			obj: {}
		}
	}
	componentDidMount() {
		//获取localStorage存储的列表页数据
		var obj = JSON.parse(localStorage.getItem('info'));
		this.setState({
			obj : obj
		})
	}
	render() {
		return(
			<div className="header">
				<div className="header-image"><canvas id="blured-poster"></canvas></div>
				<div className="header-main">
					<img id="poster" src={this.state.obj.poster} className="poster"/>
					<div className="video-play">
						<video className="video"></video>
					</div>
					<div className="info"> 
						<div className="top">
							<div className="title" style={{display:'-webkit-box',webkitBoxOrient:'vertical',webkitLineClamp:'2',overflow:'hidden'}}>{this.state.obj.name}</div>
							<div className="stars-score"><span className="score">{this.state.obj.discountRate}</span>
								<ul className="stars">
									{/*评星操作*/}
									{(function(self){
										var num=Math.floor(self.state.obj.discountRate/2);
										return self.state.data.map(function(item,idx){
												if(idx<num){
													return  <li key={idx}><img src="https://static.piaoniu.com/nuxt-static/img/starYellow.b0a4b5a.png"/></li>
												}else{
													return <li key={idx}><img src="https://static.piaoniu.com/nuxt-static/img/starGrey.eefc1c0.png"/></li>
												}
										})
									})(this)}
								</ul>
							</div>
							<div className="price-line">
								<div className="price-info">
									<span className="price">{this.state.obj.lowPrice}</span><span className="qi">元起</span></div>
								<div className="buy-num">已有{this.state.obj.highPrice}人购买👑</div>
							</div>
						</div>
					</div>
					<div className="concern-comment">
						<div className="comment"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAWBJREFUSA3tlr1OAkEUhcHAAygkavhp6Qy1vQUvxwOQWKKJD2DNE0AUCimsiFsYY2iM5fidZTbhL+wgXCCBk3yZmZ2798wdZslkMsg5V4ZHiMBKyi2PsjyzvvNC/0IPdqBvPG5UbRukZ4hXY2Gu3N6DxrVl/KEeqlgYTueUR+yEp7baaTKLpoOs+onfmZVBWt6TcdoObW3+8Laa09eAkacxX+qm8/qOYy1JLNNEo23NJwn3ttWrKjbZ6qTi0z/X/BkyG+/tcB2ncaQfkmO+k4uAPzSRtrrjBy3MLa8+KqzlvTqqtARfEKImQUtvKjxXnveAJPIqxQugo4vYA4Rcb++JmzmUjC/hDVZJdzt5TEx96akNL9zBD0hPkNdLtAXog9SD89Rk6waQ9BbGIOk6fA1dDdAAiuvmDI4neR0+QfqdNG5IexWc5L+BmNRAZtIrmH0NC2vELAdVmDloC4GH9uAPVr2hcd5RxioAAAAASUVORK5CYII="/><span>评论</span></div>
						<div className="concern"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAcCAYAAAB2+A+pAAAAAXNSR0IArs4c6QAAAppJREFUSA3Nlk2IjWEUx+/MhGTufNgo2WjKisQCU7KYBQtZ+EjKjIRiNFMTC5nNLFgMiVIWiiUTKzaUnVIsLCQuG4kFWfgsM2S4fv/XOa97n3mfe++Md8qp333Ocz7+5973vl+FQmDlcnkFnIUn8Am+wlM4A4uC8nRLrgtOwWNQ3xcowXlYmRaGDskWkPgkxOwziYGM3mPEv8WaiP+Ec9BS1UugCcbA7TJON7RBJ6yHKyAB2QkXwB9NIn8+rrNsgcXQCmvgIrhdw2ny3gKbAcvo8OxME4FDbhtMWO0e1q3mf2ftDcrTLbntoKMlG0wSOEXwYF9aHXGo3Qeyj/Am8TIOf9hOXa/ValZRv7bfAg9Z/x6GsLNiT13l33KnIhV1pQ2aITuswTcSl18S7QoS1M+DgzAI7UE6uqXWj9ZNDX4NsnXRjpwSmpFMYqYG+8nSkZN+VIZZHTZ4opmqcassRjvyS7SaVDK4ZJvu/PSjSmstU9KhHrKffz9anlOCOXdt1lEN1t3pgwU25zRjigz6PTZD13FnUoBzxII6w3M/ydBcAC9sxnD6rQjoAfHAErquG7qRpAJ1HPSumvYj1jlV5QSWwFsrGK1K/sMGveOm+Z61K1OKhC5wf7yNZBZNI4jWfpD9gJ6arRTshl8gm/FwevvAH6P9NYd6koa9FU3THk7vIfAvP+S6Da006jE2CbJLMLdeIzXNcBrcpryt1NNI8nTvAL+X38Ov9c7VTv4WyPSfHmhoSKwIAZ1w70Cm63x1WEtsGTwHmW4QG8OaGe0RWgp665SNwy4Xwt8EehuRvYTlnstlRVB3nzFwu4BzEvzMvY2/MJdhWSKI661DL3duGjwCesTOrjFkFTyDV7BhdqcF6gycD21B+P/f/gatkZ1laeTSrAAAAABJRU5ErkJggg=="/><span>想看</span></div>
					</div>
				</div>
				<div className="header-bottom">
					<div onClick={this.props.details.bind(this)} className="activity-status presale"><img src="https://static.piaoniu.com/nuxt-static/img/icon-presale.3e7d5ce.png" className="icon"/>
						<div className="text">该项目尚在预售中</div>
						<div className="right">查看详情</div>
					</div>
					<div className="time-range">{this.state.obj.timeRange}</div>
					<div className="venue">
						<div className="inner">
							<div className="name">{this.state.obj.venueName}</div>
						</div>
						<div className="icon"><img src="https://static.piaoniu.com/nuxt-static/img/icon-park2.c5fced0.png"/></div>
					</div>
					<div onClick={this.props.notice.bind(this)} className="ticket-info">
						<div className="text">购票须知</div>
						<div className="arr-right type-undefined"></div>
					</div>
				</div>
				{/*购票须知组件*/}
				{(function(self){
						if(self.props.isShowNotice===true){
							return <Xnotice/>
						}else{
							return 
						}
					})(this)}
				{/*查看详情组件*/}
				{(function(self){
						if(self.props.isShowDetails===true){
							return <Xdetails/>
						}else{
							return
						}
					})(this)}
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
				isShowNotice: true
			})
		},
		details: () => {
			dispatch({
				type: 'details',
				isShowDetails: true
			})
		}
	}
})(Xmain);