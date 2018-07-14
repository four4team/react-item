import React,{ Component } from 'react'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import One_img from '../components/base-components/one-img/one-img'
import Tab_current from '../components/base-components/tab-current/tab-current'
import Part_list from '../components/base-components/xlist/part-list/part-list'
import Xkill_footer from '../components/person-components/xfooter/xkill-footer/xkill-footer'

class Kill extends Component {
	constructor(props){
		super(props);
		this.state = {
			today: {}
		}
	}
	render(){
		return (
				<div>
					<One_img imgurl="https://static.piaoniu.com/m/static/img/header-banner.a5ac3fa.jpg"/>
					<Tab_current/>
					<One_img imgurl="https://static.piaoniu.com/m/static/img/banner-limit-discount.5d8fd98.png"/>
					<div>
						<Part_list kind="discountRate" qty="5"/>
						<Link to="/exhibit">
							<p style={{width:'100%',textAlign:'right',color:'#ff5531',paddingRight:'15px',lineHeight:'35px',height:'50px'}}>更多折扣演出 >></p>
						</Link>
					</div>
					<Xkill_footer/>
				</div>
			
		)
	}
	componentDidMount(){
		var msg = JSON.parse(window.localStorage.getItem('todayKill'));
		this.setState({
			today: msg
		})
	}
}

export default Kill
