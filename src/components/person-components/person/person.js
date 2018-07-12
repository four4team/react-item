import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
//引用样式
import styles from './person.scss';
//引用字体图标
import '../../../static/iconfont/iconfont.css';

class Xperson extends Component {
		constructor(props) {
		super(props);
		/* 利用localStorage进行页面之间传递数据  并根据数据的变动呈现不同的页面结构*/
		this.state = {
			hLogin:JSON.parse(localStorage.getItem('islogin')),
			takeUserName:JSON.parse(localStorage.getItem('loginUserName'))
		}	
	}
		//拿取localStore数据
	exitLogin(){
		localStorage.setItem('islogin' ,JSON.stringify(true))
		this.setState({
			hLogin: JSON.parse(localStorage.getItem('islogin'))
		})		
	} 		 
		render(){
			return(
				<div className={styles.hLogin}>
					<nav>
						<a>返回</a>
						<p>我的</p>
					</nav>
					<div className={styles.loginPage}>
						<div className={styles.pageTop}>
							<div className={styles.topLeft,styles.topPublic}>
								<div className={styles.portrait}>
								</div>
								<p className={styles.clasusername}>
								{
									((self)=>{
										if(self.state.hLogin){
											return <Link to="/login" style={{color:'#fff'}}>登录</Link>
										}else{
											return <span style={{
												overflow: "hidden",
              									textOverflow: "ellipsis",
              									whiteSpace: "nowrap"
											}}>用户:{self.state.takeUserName}</span>
										}
									})(this)
								}
								
								</p>
							</div>
							<div className={styles.topRight,styles.topPublic}>
								<div className={styles.preson}>个人主页 <span className="iconfont icon-arrow"></span></div>	
							</div>
						</div>
						<ul className={styles.pageDown}>
							<li> 
								<p>0</p>
								<p>想看</p>
							</li>
							<li> 
								<p>0</p>
								<p>评论</p>
							</li>
							<li> 
								<p>0</p>
								<p>关注</p>
							</li>
							<li> 
								<p>0</p>
								<p>粉丝</p>
							</li>
						</ul>
					</div>
					<div className={styles.tableView}>
						<div className={styles.tableOne}>
							<div className={styles.oneLeft}>我的订单</div>
							<div className={styles.oneRight}>查看全部订单<span className="iconfont icon-arrow" id="oneRightArrow"></span></div>
						</div>
						<ul className={styles.tableTwo,styles.tablePublic}>
							<li>
								<span className="iconfont icon-daifukuan"></span>	
								<span>待付款</span>
							</li>
							<li>
								<span className="iconfont icon-tubiaolunkuo-"></span>	
								<span>待收货</span>
							</li>
							<li>
								<span className="iconfont icon-daifahuo"></span>	
								<span>待发货</span>
							</li>
						</ul>
						<ul className={styles.tableThree,styles.tablePublic}>
							<li>
								<span style={{color:'red'}}>0</span>
								<span>优惠券</span>
							</li>
							<li>
								<span style={{color:'red'}}>0</span>
								<span>礼品卡</span>
							</li>
						</ul>
						<ul className={styles.tableFour}>
							<li><span>收货地址</span><span className="iconfont icon-arrow"></span></li>
							<li><span>客服电话</span><span className="iconfont icon-arrow"></span></li>
							<li><span>常见问题</span><span className="iconfont icon-arrow"></span></li>
						</ul>
						{
									((self)=>{
										if(self.state.hLogin){
											return
										}else{
											return <footer onClick={self.exitLogin.bind(self)} style={{
												width:"100%",
												height:"45px",
												backgroundColor:"#fff",
												margin:"6px 0 15px 0",
												textAlign:"center",
												lineHeight:"45px",
												color:"red",
												fontSize:"14px"
											}}>退出登录</footer>
										}
									})(this)
								}
					</div>
				</div>
			)
		}
}

export default Xperson;