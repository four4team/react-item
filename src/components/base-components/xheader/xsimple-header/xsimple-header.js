import React,{ Component } from 'react'
import styles from './xsimple-header.scss'

class Xsimple_header extends Component {
	render(){
		return (
			<div className={styles.simple}>
				{this.props.title}
			</div>
		)
	}
}

export default Xsimple_header