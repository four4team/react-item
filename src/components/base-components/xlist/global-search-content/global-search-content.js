import React,{ Component } from 'react'
import {connect} from 'react-redux'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import $ from 'jquery'
import styles from './global-search-content.scss'

class Search_content_g extends Component {
	constructor(props){
		super(props);
		this.state = {
			data: []
		}
	}
	render(){
		return (
			<div className={styles.search_content}>
				{(function(self){
					if(self.state.data[0]!=null){
						return self.state.data.map((item,i)=>{
							return <Link to="/details" onClick={self.toDetails.bind(self,item)} key={i}>
										<div className={styles.imgwrap}><img src={item.poster}/></div>
										<div className={styles.content}>
											<p>{item.properName}</p>
											<p>
												{(function(){
													if(item.star<=0){
														return <span>暂无评分</span>
													}else{
														return <span>评分<i>{item.star}</i></span>
													}
												})()}
												{(function(){
													if(item.lowPrice){
														return <span>￥<i>{item.lowPrice}</i><b>起</b></span>
													}else{
														return <span style={{color:'#999'}}>已过期</span>
													}
												})()}
												
											</p>
										</div>
								   </Link>
						})
					}
				})(this)}
			</div>
		)
	}
	componentWillReceiveProps(nextProps){
		//当接收新的props,触发这个阶段,因此模糊搜索可以放在这个阶段不断触发
		var self = this;
		if(nextProps.field!=null&&nextProps.field!=''){
			console.log(nextProps.field)
			$.ajax({
				url: 'http://119.23.55.48:8080/search',
				data: {
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
	toDetails(msg){
		localStorage.setItem('info',JSON.stringify(msg));
	}
}

export default connect((state)=>{
	return state
},(dispatch)=>{
	return {
		
	}
})(Search_content_g)



