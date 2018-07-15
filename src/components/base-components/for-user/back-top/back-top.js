import React,{Component} from 'react'
import styles from './back-top.scss'

class Back_top extends Component {
	constructor(props){
		super(props);
		this.state = {
			showback: 'none'
		}
		this.handel = this.handel.bind(this)
	}
	render(){
		return (
			<div className={styles.back} style={{display:this.state.showback}} onClick={this.backTop}>
				<i className="iconfont icon-fanhuidingbu"></i>
			</div>
		)
	}
	
	componentDidMount(){
		window.addEventListener('scroll',this.handel);
	}
	componentWillUnmount(){
		console.log('你好，已被移除')
		window.removeEventListener('scroll',this.handel);
	}
	handel(){
		if(window.scrollY>600){
				this.setState({
					showback: 'block'
				})
			}else{
				this.setState({
					showback: 'none'
				})
			}
	}
	backTop(){
				window.scrollTo(0,0);
		}
}

export default Back_top