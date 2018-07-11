import React,{ Component } from 'react'
import styles from "./xheader-home.scss"

class Xheader_home extends Component {
	render(){
		return (
			<div className={styles.topbar}>
				<span>广州&nbsp;<i className="iconfont icon-arrowdown" style={{fontSize:"13px"}}></i></span>
				<div className={styles.search}>
					<i className="iconfont icon-sousuo"></i>
					&nbsp;&nbsp;搜索明星、演出、场馆
				</div>
				<div className={styles.my}>
					<i className="iconfont icon-wode-copy" style={{fontSize:"23px"}}></i>
				</div>
			</div>
		)
	}
}

export default Xheader_home
