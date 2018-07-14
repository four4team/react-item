import React,{Component} from 'react'
import {connect} from 'react-redux'
import styles from './pop.scss'

class Pop extends Component {
	constructor(props){
		super(props);
		this.state = {
			hei: 0
		}
	}
	render(){
		return (
			<div className={styles.pop} style={{display:this.props.isShowPop?'block':'none',height:this.state.hei+'px'}}></div>
		)
	}
	componentDidMount(){
		this.setState({
			hei: window.innerHeight-81
		})
	}
}

export default connect((state)=>{
	return state
}, (dispatch)=>{
	return {
	  }
})(Pop)

