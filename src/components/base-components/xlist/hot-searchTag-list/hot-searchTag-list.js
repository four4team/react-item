import React,{ Component } from 'react'
import {connect} from 'react-redux'
import styles from './hot-searchTag-list.scss'

class Xsearch_tag extends Component {
	constructor(props){
		super(props);
		this.state = {
			keywords : ['永恒经典','李克勤','黎明','张韶涵','黄子华','猫','莫文蔚','艺术节','百老汇']
		}
	}
	render(){
		return (
			<div className={styles.hot_searches}>
				{this.state.keywords.map((item,i)=>{
					return <div className={styles.keyword} key={i} onClick={this.props.tagInput.bind(this,item)}>
								{item}
							</div>
				})}
			</div>
		)
	}
	componentDidMount(){
		console.log(this.state.keywords)
	}
}

export default connect((state)=>{
	return state
},(dispatch)=>{
	return {
		tagInput: (val)=>{
			dispatch({
				type: 'willGiveValue',
				giveValue: val
			})
		}
	}
})(Xsearch_tag)
