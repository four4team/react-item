import React,{ Component } from 'react'
import styles from './xcommon-header.scss'
import $ from 'jquery'

class Xcommon_header extends Component {
	render(){
		return (
			<div className={styles.head}>
				<i className="iconfont icon-arrow-left" onClick={this.backL.bind(this,-1)}></i>
				<p>{this.props.title}</p>
			</div>
		)
	}
	backL(idx){
		window.history.go(idx);
		$(window).off('scroll');
	}
}

export default Xcommon_header
