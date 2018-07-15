import React, {Component} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import $ from 'jquery';
import styles from './xmain.scss';


class Xmain extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: []
		}
	}
	componentDidMount() {
		var self = this;
		$.ajax({
			type: 'get',
			url: 'http://119.23.55.48:8080/ticket?kind=vocal_concert',
			success(data) {
					//存储数据
					localStorage.setItem('concertData',JSON.stringify(data));
					//拿取数据
					var getData = JSON.parse(localStorage.getItem('concertData'));
					
					//如果评分为0,就添加为暂无评分
					getData.forEach(function(item,idx){
						item.zanwu = item.discountRate === 0? '暂无评分':'评分';
						item.discountRate = item.discountRate === 0? '':item.discountRate;
					})
					self.setState({
						data: getData
					})
			}
		})
	}
	//写入详情页的数据
	detailsInfo(obj) {
		localStorage.setItem('info', JSON.stringify(obj))
	}
	render() {
		return (
			<ul>
				{(function(self){
					{/*以下判断是排序系列*/}
					var data = self.state.data;
					if(self.props.texts === '综合排序'){
						//排序出问题了
						if(localStorage.getItem('concertData')){
							data = JSON.parse(localStorage.getItem('concertData'));
						}
						//如果评分为0,就添加为暂无评分
						data.forEach(function(item,idx){
							item.zanwu = item.discountRate === 0? '暂无评分':'评分';
							item.discountRate = item.discountRate === 0? '':item.discountRate;
						})
					}else if(self.props.texts === '好评优先'){
						data.map(function(a){
							data.sort(function(a,b){
							return b.discountRate - a.discountRate;
							})
						})
					}else if(self.props.texts === '高价优先'){
						data.map(function(a){
							data.sort(function(a,b){
								return b.lowPrice - a.lowPrice;
							})
						})
					}else if(self.props.texts === '最新优先'){
						data.map(function(a){
							data.sort(function(a,b){
								return Date.parse(b.timeRange) - Date.parse(a.timeRange);
							})
						})
					}
					return data.map(function(item,idx){
					return  <Link to="/details" key={idx}>
								<li onClick={self.detailsInfo.bind(this,data[idx])} className={styles.li}>
										<div className={styles.img_box}>
											<img className={styles.img} src={item.poster}/>
										</div>
										<div className={styles.info_box}>
											<div className={styles.title}>
												<span>[广州]</span>{item.properName}
											</div>
											<div className={styles.time_box}>
												<span>{item.timeRange}</span>
												<span className={styles.site}>|</span>
												<span className={styles.name}>{item.venueName}</span>
											</div>
											<div className={styles.score_box}>{item.zanwu}<span className={styles.score}>{item.discountRate}</span></div>
											<div className={styles.price_box}>
												<span className={styles.price}>{item.lowPrice}</span>
												<span className={styles.text}>元起</span>
											</div>
											{/*判断如果有‘新用户下单立减20元’这一项，就渲染到页面上，否则返回空*/}
											{JSON.parse(item.campaigns).map(function(item,index){
												if(item.desc != ''){
													return  <div className={styles.campaigns_box} key={index}>
															 	<i className="iconfont icon-biaoqian" style={{fontSize:'10px'}}></i>
																<span className={styles.desc}>{item.desc}</span>
													   		</div>
												}else{
													return 
												}
											})}
										</div>
									</li>
								</Link>
					
					})
					
				})(this)}
			</ul>
		)
	}
}

export default connect((state) => {
	return state
}, (dispatch) => {
	return {
		
	}
})(Xmain);
