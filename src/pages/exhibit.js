import React, {Component } from 'react'
import Xcommon_header from '../components/base-components/xheader/xcommon-header/xcommon-header'
import Common_list from '../components/base-components/xlist/common-list/common-list'
import Xloading from '../components/base-components/for-user/xloading/xloading'

class Exhibit extends Component{
	render(){
		return (
			<div style={{display:'flex',flexDirection:'column'}}>
				<Xcommon_header title="折扣票"/>
				<div style={{marginTop:'44px'}}>
					<Common_list types="guess_like" isrequest="true" style={{marginTop:'44px'}}/>
				</div>
				<Xloading/>
			</div>
		)
	}
}

export default Exhibit
