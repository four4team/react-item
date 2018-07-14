import React,{ Component } from 'react'
import {connect} from 'react-redux'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import $ from 'jquery'
import styles from './common-list.scss'

class Common_list extends Component {
	constructor(props){
		super(props);
		this.state = {
			data: [],
			len: 0,
			times: 0,
			topTimes: 0,
			judgeTimes: 0,
			message: ''
		}
	}
	render(){
		return (
			<ul className={styles.common}>
				{(function(self){
					if(self.state.data[0]!=null){
						var data = self.state.data;
						if(self.props.sortType!=''){
							if(self.props.sortType=='star'){
								data.sort(function(a,b){
									return b[self.props.sortType]-a[self.props.sortType]
								})
							}else{
								data.sort(function(a,b){
									return a[self.props.sortType]-b[self.props.sortType]
								})
							}
							
						}else{
							data = self.state.data;
						}
						return data.map((item,i)=>{
								return <Link to="/details" onClick={self.toDetails.bind(self,item)} key={i}>
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
												<p className={styles.price}><span>{item.lowPrice}</span>元起
												</p>
											</div>
										</Link>
							})
						}else{
							return;
						}
				})(this)}
				{(function(self){
					if(self.state.message.length>0){
						return <p className={styles.last}>{self.state.message}</p>
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
		$.ajax({
			url: 'http://119.23.55.48:8080/lazy?kind='+self.props.types,
			success(msg){
					self.setState({
						len: msg
					})
			}
		})
		if(self.props.isrequest==='true'){
		  $.ajax({
				url: 'http://119.23.55.48:8080/lazy',
						data: {
							kind: self.props.types,
							num: self.state.times*10
						},
						success(msg){
							if (!self) return;
							var times_up = self.state.times+1;
							self.setState({
								data: self.state.data.concat(msg),
								times: times_up,
								judgeTimes: times_up 
							})
							if(self.state.times==1){
								self.setState({
									topTimes: Math.ceil((self.state.len)/(msg.length))
								})
							}
							
							self.props.endLoad();
						}
			})
		  	
		  	
		  	
		}
		//懒加载 ———— 判断滚动条是否到底部,进行相应的发送ajax请求拿数据
		//judgeTimes用来防止用户捣乱，即滚动条拉到底，然后又往回拉，接着拉到底
		//这样会发送没必要的ajax请求
		$(window).scroll(function(){
		　　var scrollTop = $(this).scrollTop();
		　　var scrollHeight = $(document).height();
		　　var windowHeight = $(this).height();
			
		　　if(scrollTop + windowHeight == scrollHeight&&(self.state.times<self.state.topTimes||self.state.times==0)){
		　　　　console.log("已经到最底部了！");
				var judgeNum = self.state.judgeTimes+1;
				self.setState({
					judgeTimes: judgeNum
				})
				self.props.loading();
				if(self.state.judgeTimes-self.state.times==1){
					$.ajax({
						url: 'http://119.23.55.48:8080/lazy',
						data: {
							kind: self.props.types,
							num: self.state.times*10
						},
						success(msg){
							var times_up = self.state.times+1;
							self.setState({
								data: self.state.data.concat(msg),
								times: times_up,
								judgeTimes: times_up 
							})
							if(self.state.times==1){
								self.setState({
									topTimes: Math.ceil((self.state.len)/(msg.length))
								})
							}
							
							self.props.endLoad();
						}
					})
				}
				
		　　}else if(self.state.times>=self.state.topTimes&&self.state.topTimes!=0){
				self.setState({
					message: '已经到底啦'
				})
			}
		})
		
	}
	
}

export default connect((state)=>{
	return state
}, (dispatch)=>{
	return {
	    loading: (num,e) => {
	     //console.log(e.target.src);
	      dispatch({
	      	type: 'loading',
	      	willLoad: true
	      })
	      
	    },
	    endLoad: ()=>{
	    	dispatch({
	    		type: 'loading',
	    		willLoad: false
	    	})
	    }
	  }
})(Common_list)

//	(function(){
//		var str = JSON.parse(item.events)[0].specification.replace(/[\u4e00-\u9fa5]/g,'');
//		if(str.indexOf('-')<0){
//			str = str.slice(0,4)+'.'+str.slice(4,6)+'.'+str.slice(-2,str.length);
//			return str;
//		}else{
//			return str;
//		}
//	})()


						
