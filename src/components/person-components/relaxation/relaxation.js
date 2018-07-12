import React, {
	Component
} from 'react';
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
	//生命周期
	componentDidMount() {
		var self = this
		$.ajax({
			type: "get",
			url: "http://119.23.55.48:8080/ticket?kind=leisure_exhibition",
			success(data) {
				self.setState({
					hData: data
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
					console.log(self.state.hData)
					return self.state.hData.map((item,idx)=>{
						let rank = Number(item.rank).toFixed(1)
						let discountRate = Number(item.discountRate).toFixed(1)
						let lowPrice = item.lowPrice
						return <a data-guid={item.id} key={idx}>
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
						</a>
					})
				})(this)
				}
			</div>
			</div>
		)
	}

}

export default Xrelaxation;