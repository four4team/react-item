import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import $ from 'jquery';
import './xrelated.css';

class Xrelated extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: []
		}
	}
	componentDidMount() {
		var self = this;
		$.ajax({
			type: 'get',
			url: 'http://119.23.55.48:8080/ticket?kind=vocal_concert',
			success:function(data) {
				data = data.slice(0,3);
				self.setState({
					data : data
				})
			}
		})
	}
	render() {
		return (
			<div className="related-activity section">
				<div className="section-title">相关演出</div>
				<div className="content">
					{(function(self){
						return self.state.data.map(function(item,idx){
							return  <li className="activity" key={idx}>
										<div className="main-top">
											<a className="poster-wrap">
												<div className="video-play" style={{backgroundSize:'26px 26px',display:'none'}}>
													<video className="video"></video>
												</div>
												<div className="poster" lazy="loaded" style={{backgroundImage: `url(${item.poster})`}}></div>
											</a>
											<div className="info">
												<div className="title-line">
													<a className="title"><span className="city">{item.properName}</span>CCG EXPO 2018</a>
													<div className="activityTag">	
													</div>
												</div>
												<div className="time-address"><span className="time">{item.timeRange}</span><span className="split">|</span><span className="address">{item.venueName}</span></div>
												<div className="rank">评分&nbsp;<span>{item.discountRate}</span></div>
												<div className="price-wrap">
													<div><span className="price">{item.lowPrice}</span><span className="qi">元起</span>
													</div>
													<div className="status-text"></div>
												</div>
												<div className="promotion-info">
													<ul>
														<a href="#">
															<li>
																<span className="inner-icon iconfont icon-biaoqian"></span>
																	{JSON.parse(item.campaigns).map(function(item,idx){
																			return <span className="desc" key={idx}>{item.desc}</span>
																	})}
															</li>
														</a>
													</ul>
												</div>
											</div>
										</div>
									</li>
						})
					})(this)}
						
				</div>
			</div>
			)
		}
	}

export default Xrelated;




