import React, {Component} from 'react';

//列表公共头部
import Xhead from '../components/base-components/xheader/xlist-header/xhead';
import Xanimate from '../components/person-components/xanimate/xconcert-animate/xanimate';

class Xconcert extends Component {
	render() {
		return (
			<div>
				<Xhead/>
				<Xanimate/>
			</div>
		)
	}
}

export default Xconcert;

