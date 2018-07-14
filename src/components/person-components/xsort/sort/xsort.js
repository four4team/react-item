import React, {
	Component
} from 'react';
import {connect} from 'react-redux';
//引用jquery
import $ from 'jquery';
//引用样式
import styles from './xsort.scss';

class Xsort extends Component {
	//数据层
	constructor(props) {
		super(props);
		this.state = {
		}
	}
	
	//html层
	render() {
		return(
			<div className={styles.xsort}>
				<ul onClick={this.props.sortJustify.bind(this)}>
					<li className="zonghe">综合排序</li>
					<li className="lowPrice">低价优先</li>
					<li className="praise">好评优先</li>
					<li className="news">最新优先</li>
				</ul>
			</div>
		)
	}

}

export default connect((state) => {
	return state
}, (dispatch) => {
	return {
			sortJustify:(e)=>{
			dispatch({
				type:'sortJustify',
				sortText:e.target.className
			})
		}
	}	
})(Xsort)