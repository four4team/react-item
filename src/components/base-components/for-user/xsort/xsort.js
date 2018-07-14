import React,{Component} from 'react'
import {connect} from 'react-redux'
import { Calendar } from 'antd'
import styles from './xsort.scss'

class Xsort extends Component {
	constructor(props){
		super(props);
		this.state = {
			field: [{
				title:'综合排序',
				icon: 'iconfont icon-arrowdown'
			},{
				title:'全部时间',
				icon: 'iconfont icon-arrowdown'
			},{
				title:'在线选座'
			}],
			status: [false,false,false],
			box: [{
					order: ['综合排序','最新优先','低价优先','好评优先']
				},{
					html: <Calendar fullscreen={false} onSelect={()=>{
						this.setState({
							status: [false,false,false]
						})
						this.props.showPop(this,false);
					}}/>
				},{
					
				}],
			sorts: ['','newBest','lowPrice','star']
		}
	}
	render(){
		return (
			<div className={styles.sort}>
				{this.state.field.map((item,i)=>{
					var self = this;
					return <span onClick={this.select.bind(this,i)} key={i} className={this.state.status[i]?styles.active:''}>
								<b>{item.title}</b>
								{(function(){
									if(item.icon){
										return <i className={self.state.status[i]?'iconfont icon-up':item.icon}></i>
									}
								})()}
						   </span>
				})}
				{this.state.box.map((item,i)=>{
					if(i==0){
						return <div style={{display:this.state.status[i]?'block':'none'}} className={styles.order} key={i}>
									{item.order.map((ite,idx)=>{
										return <p className={ite==this.state.field[0].title?styles.sortCheck:''} onClick={this.sort.bind(this,ite,this.state.sorts[idx])} key={idx}>
													<span>{ite}</span>
												</p>
									})}
								</div>
					}else if(i==1){
						return <div className={styles.calendar} style={{display:this.state.status[i]?'block':'none'}} key={i}>
								{item.html}
							   </div>
					}else if (i==2){
						return <div key={i}></div>
					}
				})}
			</div>
		)
	}
	select(idx){
		
		var arr = [false,false,false];
		arr.splice(idx,1,!this.state.status[idx]);
		this.setState({
			status: arr
		})
		this.props.showPop(this,!this.state.status[idx]);
		
	}
	sort(msg,type){
		var field = this.state.field;
		field[0].title = msg;
		this.setState({
			field: field,
			status: [false,false,false]
		})
		this.props.showPop(this,false);
		this.props.willSort(type);
	}
}

export default connect((state)=>{
	return state
},(dispatch)=>{
	return {
		showPop: (self,bool)=>{
			dispatch({
				type: 'showPop',
				isShowPop: bool
			})
		},
		willSort: (type)=>{
			dispatch({
				type: 'sort',
				sortType: type
			})
		}
	}
})(Xsort)

