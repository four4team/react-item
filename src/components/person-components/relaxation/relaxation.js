import React, {
	Component
} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
//引用JQ
import $ from 'jquery';
//引用css样式
import styles from './relaxation.scss';
class Xrelaxation extends Component {
	//数据层
	constructor(props) {
		super(props);
		this.state = {
			hData: []
		}
	}
	//携带数据跳转至详情页的方法
	detailsInfo(obj) {
		localStorage.setItem('info', JSON.stringify(obj))
	}
	//生命周期
	componentDidMount() {
		var self = this
		$.ajax({
			type: "get",
			url: "http://119.23.55.48:8080/ticket?kind=leisure_exhibition",
			success(data) {
				localStorage.setItem('relaxData',JSON.stringify(data));
				self.setState({
					hData: JSON.parse(localStorage.getItem('relaxData'))
				})
			}
		});
	}
	//html层
	render() {
		return(
			<div className={styles.relaxation}>
			<div>	{
				(function(self){
					let data = self.state.hData;
					//判断从redux拿回不同的数据 实现相关排序功能
					if(self.props.sortText === 'zonghe'){
						 data.sort(function(a,b){
							
							return a.id - b.id;
						})
					}else if(self.props.sortText === 'lowPrice'){
						data.sort(function(a,b){
							
							return a.lowPrice - b.lowPrice;
						})
					}else if(self.props.sortText === 'news'){
						data.sort(function(a,b){
							
							return Date.parse(b.timeRange) - Date.parse(a.timeRange);
						})
					}else if(self.props.sortText === 'praise'){
						data.sort(function(a,b){
						
							return b.rank - a.rank;
						})
					}
				
					return data.map((item,idx)=>{
						let rank = Number(item.rank).toFixed(1)
						let discountRate = Number(item.discountRate).toFixed(1)
						let lowPrice = item.lowPrice
						return <Link to="/details" onClick={self.detailsInfo.bind(this,data[idx])} key={idx}>
									<img src={item.poster}/>
									{
										(()=>{
											if(discountRate==='0.0'){
												return 
											}else{
												return <em>{discountRate}折</em>
											}
										})()
									}								
									<p>{item.timeRange}&nbsp;<span>{item.venueName}</span></p>
									<h4>{item.name}</h4>
									{
										(()=>{
											if(rank==='0.0'){
												return <li>暂无评分</li>
											}else{
												return <li>评分:<span>{rank}</span></li>
											}
										})()
									}
										{
										(()=>{
											if(lowPrice===null){
												return <header>已过期</header>
											}else{
												return <h3>{lowPrice}<span>元起</span></h3>
											}
										})()
									}									
						</Link>
					})
				})(this)
				}
			</div>
			</div>
		)
	}

}

export default connect((state) => {
	return state
}, (dispatch) => {
	return {
		
	}
})(Xrelaxation); 