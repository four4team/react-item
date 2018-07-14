import React,{ Component } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import styles from './movie-list-one.scss'
import $ from 'jquery'
import Swiper from 'swiper'


class Xmovie_list_one extends Component {
	constructor(props){
		super(props);
		this.state = {
			startx: 0,
			starty: 0,
			endx: 0,
			endy: 0,
			movex: 0
		}
	}
	render(){
		return (
			<div className={styles.wrap}>
			<div className="swiper-container" >
				<ul ref="myul" className="swiper-wrapper" style={{display:"flex"}}>
					{
						 this.props.list.map((item,i)=>{
								return <Link key={i} className="swiper-slide" to="/details" onClick={this.toDetails.bind(this,item)}>
											{function(self){
												if(self.props.names=='discount'){
													return <b className={styles.icon}>
														<i>{String(item.discountRate).match(/[0-9]/g)[0]}</i>
														<i>{item.discountRate.toFixed(1).match(/\.[0-9]/g)}</i>
														<i>折</i>
													</b>
												}
											}(this)}
											
											<img src={item.poster}/>
											<a>{item.properName}</a>
											<span><i>￥{(function(){
												if(item.lowPrice){
													return item.lowPrice
												}else{
													return 200+i+20
												}
											})()}</i>{function(self){
												if(self.props.names=='discount'){
													return <del>￥{parseInt(item.lowPrice/(item.discountRate/10))}</del>
												}else if(self.props.names=='hot'){
													return <i>起</i>
												}
											}(this)}</span>
										</Link>
							})
					}
				</ul>
			</div>
		</div>
		)
	}
	start(e){
		
		this.setState({
			startx: e.touches[0].pageX,
			startY: e.touches[0].pageY
		})
		e.preventDefault();
		var self = this;
		
	}
	move(e){
		
		this.setState({
			endx: e.changedTouches[0].pageX,
			endy: e.changedTouches[0].pageY,
			movex: this.state.endx-this.state.startx
		})
		e.preventDefault();
		console.log(this.state.endx,this.state.endy);
		if($(this.refs.myul).offset().left>16){
			this.setState({
				movex: 0
			})
		}
	}
	toDetails(msg){
		localStorage.setItem('info',JSON.stringify(msg));
	}
	componentDidMount(){
		new Swiper('.swiper-container',{
			freeMode: true,
			slidesPerView : 3,
			width: 300
			})
	}
	
}

export default Xmovie_list_one
//style={{"left": this.state.movex+'px'}}
//onTouchStart={this.start.bind(this)} onTouchMove={this.move.bind(this)}
//+'').match(/[0-9]/g)[0]}
//.match(/\.[0-9]/g)[0]