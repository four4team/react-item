import React, {Component} from 'react';
//引用头部组件
import Xhead from '../components/base-components/xheader/xlist-header/xhead';
//引用dance内容主体组件
import Xdance from '../components/person-components/dance/dance';

class Xdancing extends Component {
	render() {
		return(
			<div>
				<div style={{marginBottom:"52px"}}>
					<Xhead/>
				</div>
				
				<Xdance/>	
			</div>
		);
	}
}
export default Xdancing;