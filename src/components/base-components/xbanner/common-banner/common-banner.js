import React,{Component} from 'react'
import { Carousel } from 'antd'
import './common-banner.scss'

class Xbanner extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
			  <Carousel autoplay>
			    {this.props.imgs.map((item,i)=>{
			    	return <div key={i} style={{borderRadius:"8px",overflow:"hidden"}}><img src={item}/></div>
			    })}
			  </Carousel>
		)
	}
}

export default Xbanner
