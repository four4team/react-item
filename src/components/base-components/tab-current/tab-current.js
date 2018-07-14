import React,{ Component } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import styles from './tab-current.scss'
import $ from 'jquery'
import info from '../../../static/JSON/kill.json'

class Tab_current extends Component{
	constructor(props){
		super(props);
		this.state = {
			active: [false,true,false],
			content: [{
				time: '昨天',isover: '已结束'
			},{
				time: '今天',isover: '即将开始'
			},{
				time: '明天',isover: '即将开始'
			}],
			ticket: []
		}
	}
	render(){
		return (
				<div className={styles.kill}>
					<div className={styles.kill_t}>
						{this.state.content.map((item,i)=>{
							return <p className={this.state.active[i]?styles.active:styles.common} onClick={this.change.bind(this,i)} key={i}>
										<span>{item.time}</span>
										<span>{item.isover}</span>
									</p>
						})}
					</div>
					<div className={styles.kill_b}>
						{
							this.state.ticket.map((item,i)=>{
								return <Link className={styles.ticket} to="/details" onClick={this.toDetails.bind(this,item)} style={{display:this.state.active[i]?'block':'none'}} key={i}>
											<b>{item.title}</b>
											<div className={styles.box}>
												<div><img src={item.data[0].poster}/></div>
												<div>
													{(function(){
														if(item.data[0].activityShortname){
															return <p>{item.data[0].activityShortname}</p>
														}else{
															return <p>{item.data[0].name}</p>
														}
													})()}
													<p>{item.data[0].eventSpecification}</p>
													<p>{item.data[0].venue}</p>
													<p className={styles.price}>
														秒杀价 <span>¥ <i>{item.data[0].salePrice}</i> </span>
														<del>¥ {item.data[0].originPrice}</del>
													</p>
													<p>
														{(function(){
															if(i==0){
																return <span className={styles.out}>{item.buy}</span>
															}else{
																return <span className={styles.will}>{item.buy}</span>
															}
														})()}
													</p>
												</div>
											</div>
										</Link>
							})
						}
					</div>
				</div>
			   )
	}
	change(idx){
		var arr = [false,false,false];
		arr.splice(idx,1,true);
		this.setState({
			active: arr
		})
	}
	toDetails(msg){
		localStorage.setItem('info',JSON.stringify(msg));
	}
	componentDidMount(){
		var arr = [];
		for(var key in info){
			if(key=='current'){
				info[key].title = '抢购进行中';
				info[key].buy = '立即抢购';
			}else if(key=='pre'){
				info[key].title = '下滑看看限时特惠吧';
				info[key].buy = '抢购结束';
			}else if(key=='next'){
				info[key].title = '每天14:00准时开抢';
				info[key].buy = '开抢提醒';
			}
			arr.push(info[key]);
		}
		this.setState({
				ticket: arr
		})
	}
}

export default Tab_current