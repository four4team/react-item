import React, {Component} from 'react'
import styles from "./xheader-home.scss"
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {connect} from 'react-redux'

class Xheader_home extends Component {
	render() {
		return(
			<div className={styles.topbar}>
				<span>广州&nbsp;<i className="iconfont icon-arrowdown" style={{fontSize:"13px"}}></i></span>
				<div className={styles.search} onClick={this.props.search}>
					<i className="iconfont icon-sousuo"></i>
					&nbsp;&nbsp;搜索明星、演出、场馆
				</div>
				
				<div className={styles.my}>
				<Link to="/person">
					<i className="iconfont icon-wode-copy" style={{fontSize:"23px"}}></i>
					</Link>
				</div>
			</div>
		)
	}
}

export default connect((state)=>{
	return state
},(dispatch)=>{
	return {
		search: ()=>{
			dispatch({
				type: 'showGlobalSearch',
				isShowGlobalSearch: true
			})
		}
	}
})(Xheader_home)
