import React,{ Component } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import $ from 'jquery'
import styles from './part-list.scss'

class Part_list extends Component {
	constructor(props){
		super(props);
		this.state = {
			data: []
		}
	}
	render(){
		return (
			<ul className={styles.common}>
				{(function(self){
					if(self.state.data[0]!=null){
						return self.state.data.map((item,i)=>{
								return <li key={i}>
											<Link to="/details" onClick={self.toDetails.bind(this,item)}>
												<div className={styles.list_l}>
													<img src={item.poster}/>
													{function(){
																if(item.discountRate){
																	return <b className={styles.icon}>
																		<i>{String(item.discountRate).match(/[0-9]/g)[0]}</i>
																		<i>{item.discountRate.toFixed(1).match(/\.[0-9]/g)}</i>
																		<i>折</i>
																	</b>
																}
															}()}
												</div>
												<div className={styles.list_r}>
													<p>{item.properName}</p>
													<p>
														<span>{item.timeRange}
														</span>&nbsp;|&nbsp;
														<span>{item.venueName}</span>
													</p>
													{(function(){
														if(item.star>0){
															return <p>评分&nbsp;<span>{item.star.toFixed(1)}</span>
																   </p>
														}else{
															return <p>
																		暂无评分
																   </p>
														}
													})()}
													<p className={styles.price}><span>{item.lowPrice?item.lowPrice:101}</span>元起
													</p>
												</div>
											</Link>
										</li>
							})
						}else if(self.props.field!=null){
							return <div className={styles.prompt}>
										<img src="http://static.piaoniu.com/nuxt-static/img/ticket.ae49b23.png"/>
										<span>天了噜,没找到相关演出</span>
									</div>
						}
				})(this)}
			</ul>
		)
	}
	toDetails(msg){
		localStorage.setItem('info',JSON.stringify(msg));
	}
	componentDidMount(){
		var self =this;
		if(self.props.qty){
			$.ajax({
				url: 'http://119.23.55.48:8080/part',
				data: {
					kind: self.props.kind,
					qty: self.props.qty
				},
				success(msg){
					self.setState({
						data: msg
					})
				}
			})
		}
	}
	componentWillReceiveProps(nextProps){
		//当接收新的props,触发这个阶段,因此模糊搜索可以放在这个阶段不断触发
		var self = this;
		if(nextProps.field!=null){
			$.ajax({
				url: 'http://119.23.55.48:8080/search',
				data: {
					kind: nextProps.kind,
					field: nextProps.field
				},
				success(msg){
					self.setState({
						data: msg
					})
				}
			})
		}
	}
}

export default Part_list