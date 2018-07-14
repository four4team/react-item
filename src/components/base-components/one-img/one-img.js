import React,{ Component } from 'react'
import styles from './one-img.scss'

class One_img extends Component {
	render(){
		return (
			<div className={styles.box}>
				<img src={this.props.imgurl}/>
			</div>
		)
	}
}

export default One_img
