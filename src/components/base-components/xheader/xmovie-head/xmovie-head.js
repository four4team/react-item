import React,{ Component } from 'react'
import styles from './xmovie-head.scss'

class Xmovie_head extends Component {
	constructor(props){
		super(props);
	}
	render(){
		return (
			<h3 className={styles.movie_hot}><span>{this.props.classify.title_l}</span>
				{(function(self){
					if(self.props.classify.title_r){
						return <a>{self.props.classify.title_r}</a>
					}else{
						return
					}
				})(this)}
			</h3>
		)
	}
}

export default Xmovie_head
