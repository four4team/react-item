import React, {
    Component
} from 'react';
import {connect} from 'react-redux';
//引用jquery
import $ from 'jquery';
//引用样式
import styles from './sort_nav.scss';

class Xsort_nav extends Component {
    //数据层
    constructor(props) {
        super(props);
        this.state = {
            hData: []
        }
    }
    //html层
    render() {
        return(
            <div className={styles.sortNav}>
				<nav>
					<img src={this.props.navImgurl}/>
					<span>{this.props.navText}</span>
				</nav>
            
            </div>
        )
    }

}
export default connect((state) => {
	return state
}, (dispatch) => {
	return {
		
	}	
})(Xsort_nav) 