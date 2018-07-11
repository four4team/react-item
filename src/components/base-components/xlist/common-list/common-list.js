import React,{ Component } from 'react'
import {connect} from 'react-redux'
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
			judgeTimes: 0
		}
	}
	render(){
		return (
			<ul className={styles.common}>
				{(function(self){
					if(self.state.data[0]!=null){
						return self.state.data.map((item,i)=>{
								return <li key={i}>
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
													<span>{(function(){
															var str = JSON.parse(item.events)[0].specification.replace(/[\u4e00-\u9fa5]/g,'');
															if(str.indexOf('-')<0){
																str = str.slice(0,4)+'.'+str.slice(4,6)+'.'+str.slice(-2,str.length);
																return str;
															}else{
																return str;
															}
														})()}
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
									   </li>
							})
						}else{
							return;
						}
				})(this)}
			</ul>
		)
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
		//懒加载 ———— 判断滚动条是否到底部,进行相应的发送ajax请求拿数据
		//judgeTimes用来防止用户捣乱，即滚动条拉到底，然后又往回拉，接着拉到底
		//这样会发送没必要的ajax请求(这步暂时没做)
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