import React, {Component} from 'react';
//引用头部组件
import Xhead from '../components/base-components/xheader/xlist-header/xhead';
//引用relation内容主体组件
import Xrelaxation from '../components/person-components/relaxation/relaxation';

class Xrelaxing extends Component {
	render() {
		return(
			<div>
				<div style={{marginBottom:"52px"}}>
					<Xhead/>
				</div>				
				<Xrelaxation/>	
			</div>
		);
	}
}
export default Xrelaxing;