import React,{Component} from 'react'
import styles from './back-top.scss'

class Back_top extends Component {
	constructor(props){
		super(props);
		this.state = {
			showback: 'none'
		}
	}
	render(){
		return (
			<div className={styles.back} style={{display:this.state.showback}} onClick={this.backTop}>
				<i className="iconfont icon-fanhuidingbu"></i>
			</div>
		)
	}
	
	componentDidMount(){
		var self = this;
		window.addEventListener('scroll',function(){
			
			if(window.scrollY>600){
				self.setState({
					showback: 'block'
				})
			}else{
				self.setState({
					showback: 'none'
				})
			}
			
			
		})
	}
	backTop(){
				window.scrollTo(0,0);
		}
}

export default Back_top