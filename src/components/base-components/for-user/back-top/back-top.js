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
			<div className={styles.back} style={{display:this.state.showback}} onClick={this.backTop} onMouseOver={this.show.bind(this)}>
				<i className="iconfont icon-fanhuidingbu"></i>
			</div>
		)
	}
	
	componentDidMount(){
		var self = this;
		document.addEventListener('scroll',function(){
			if(window.scrollY>400){
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
	show(){
//		var self = this;
//		document.addEventListener('scroll',function(){
//			if(window.scrollY>300){
//				self.setState({
//					showback: 'block'
//				})
//			}
//		})
	}
	
}

export default Back_top