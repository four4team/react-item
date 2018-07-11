import React,{ Component } from 'react'
import styles from './xloading.scss'
import {connect} from 'react-redux'

class Xloading extends Component{
	constructor(props){
		super(props);
		this.state = {
			left:0,
			top:0
		}
	}
	render(){
		return  <div className={styles.loadmore} style={{display:this.props.willLoad?'block':'none',left:this.state.left+'px',top:this.state.top+'px'}}>
					<span>加载中...</span>
			    </div>
	}
	componentDidMount(){
		var wid = (window.innerWidth-160)/2;
		var hei = (window.innerHeight-40)/2;
		this.setState({
			left: wid,
			top: hei
		})
	}
}

export default connect((state)=>{
	return state
}, (dispatch)=>{
	return {
	  }
})(Xloading)