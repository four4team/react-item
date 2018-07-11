import React,{Component} from 'react'
import Home_kind from '../../xlist/xhome-kind/xhome-kind'
import info from '../../../../static/JSON/home.json'

class Xmain_home extends Component {
	constructor(props){
		super(props);
		this.state = {
			options_t: {
				hot:1
			},
			options_c: {
				discountRate: 1
			}
		}
	}
	render(){
		return (
			<div style={{paddingLeft:"14px"}}>
				<Home_kind classify={info.header.hot} names="hot" options={this.state.options_t}></Home_kind>
				<Home_kind classify={info.header.discount} names="discount" options={this.state.options_c}></Home_kind>
				<div className="da-banner" style={{paddingTop:"32px"}}>
					<img src="https://img.piaoniu.com/banner/a63d961362025b2e78e82ee1c9fab1f827e1cb2a.jpg" style={{width: "347px", height: "83.28px"}} />
				</div>
			</div>
		)
	}
}

export default Xmain_home

