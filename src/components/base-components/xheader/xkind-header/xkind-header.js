import React, {Component} from 'react'
import {connect} from 'react-redux'
import $ from 'jquery'
import styles from './xkind-header.scss'

class Xkind_header extends Component {
	render() {
		return(
			<div className={styles.topbar}>
				<div className={styles.back} onClick={this.backL.bind(this,-1)}>返回</div>
				<div className={styles.search}>
					<i className="iconfont icon-sousuo"></i>
					<input placeholder="搜索明星、演出、场馆" onClick={this.props.start} onInput={this.change.bind(this)} ref="inputEle"/>
				</div>
					<div className={styles.cancel} onClick={this.props.end} style={{display:this.props.isShowSearchPop?'block':'none'}}>取消</div>
				</div>
		)
	}
	backL(idx){
		window.history.go(idx);
		$(window).off('scroll');
	}
	change(){
		var str = this.refs.inputEle.value;
		
		var str1 = str?
					str.match(/[A-z|0-9]+/g)?
						true:false
					:true
		if(str1){
		}else{
			if(str){
				console.log(str);
				this.props.inputs(str);
			}
		}
	}
}

export default connect((state)=>{
	return state
},(dispatch)=>{
	return {
		start: ()=>{
			dispatch({
				type: 'willSearch',
				isShowSearchPop: true
			})
		},
		end: ()=>{
			dispatch({
				type: 'willSearch',
				isShowSearchPop: false
			})
		},
		inputs: (val)=>{
			console.log(val)
			dispatch({
				type: 'willSearch',
				search: val,
				isShowSearchPop: true
			})
		}
	}
})(Xkind_header)
