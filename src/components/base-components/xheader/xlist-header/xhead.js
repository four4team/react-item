import React, {Component} from 'react';
import styles from './xhead.scss';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class Xhead extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [{
				clas: 'iconfont icon-shouye',
				text: '首页',
				router: '/'
			},{
				clas: 'iconfont icon-gouwuche',
				text: '购物车',
			},{
				clas: 'iconfont icon-20150825tubiaolianxizhuanhuan03',
				text: '我的票牛'
			}],
			attr: false,
			isShowList: false,
			value: ''
		}
	}
	showHead() {
		this.setState({
			attr: true,
			isShowList: false,
		})
	}
	hideHead() {
		this.setState({
			attr: false,
			value: ''
		})
	}
	list() {
		this.setState({
			isShowList: !this.state.isShowList
		})
	}
	retu() {
		window.history.go(-1);
	}
	render() {
		return (
			<div className={styles.search_header_home}>
				<div className={styles.ui_fixed_header,styles.full_header}>
					<div className={styles.topbar}>
						<div onClick={this.retu.bind(this)} className={styles.city_picker}>返回</div>
						<div onClick={this.showHead.bind(this)} className={styles.ui_searchbox}>
							<div className={styles.ui_inner}>
								<div className={styles.ui_wrap}>
									<div className={styles.ui_icon,styles.icon_search}></div></div>
								<form action="">
									<input type="text" className={styles.search_input} placeholder="搜索明星、演出、场馆" value={this.state.value}/>
									<div className={styles.clear_input} style={{display:'none'}}></div>
								</form>
							</div>
						</div>
						<div onClick={this.list.bind(this)} className="iconfont icon-icon-more" style={{display:this.state.attr?'none':'block',fontSize:'24px',color:'#fff',height:'25px',width:'25px',backgroundSize:'25px 25px',margin:'-10px 10px 0 0'}}>
							<div className={styles.more_list} style={{display:this.state.isShowList?'block':'none'}}>
								<div className={styles.sanjiao}></div>
								{(function(self){
									return self.state.data.map(function(item,idx){
										return  <a href={item.router} className={styles.moreA} key={idx}>
													<i className={item.clas}></i>
													<span>{item.text}</span>
												</a>
												
									})
								})(this)}	
							</div>
						</div>
						<a href="#" onClick={this.hideHead.bind(this)} className={styles.person_icon} style={{display:this.state.attr?'block':'none',width:'40px',fontSize:'16px',color:'#fff'}}>取消</a>
					</div>
				</div>
			</div>
		)
	}
}

export default Xhead;
