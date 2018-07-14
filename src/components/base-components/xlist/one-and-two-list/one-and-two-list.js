import React,{Component} from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import styles from './one-and-two-list.scss'
import $ from 'jquery'

class Xpush extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
			<ul className={styles.push}>
				{this.props.list.slice(0,1).map((item,i)=>{
						return <Link to="/kill" key={i} onClick={this.sendData.bind(this,item)}>
									<li key={i}>
										<span>{item.title}</span>
										<span>{item.desc}</span>
										<span>{item.info}</span>
										<img src={item.imgurl} style={{width:"100%",height:"90px"}}/>
									</li>
								</Link>
					
				})}
				<div>
				{
					this.props.list.slice(1,3).map((item,i)=>{
						return <Link key={i} to="/details" onClick={this.toDetails.bind(this,item)}>
									<div>
									<span>{item.title}</span>
									<span>{item.desc}</span>
									<span>{item.desc_2}</span>
									</div>
									<img src={item.imgurl} style={{float:"right"}}/>
								</Link>
					})
				}
				</div>
			</ul>
		)
	}
	sendData(data){
		data = JSON.stringify(data);
		window.localStorage.setItem('todayKill',data);
		$(window).off('scroll');
		$(document).off('scroll');
	}
	toDetails(msg){
		localStorage.setItem('info',JSON.stringify(msg));
	}
}

export default Xpush
