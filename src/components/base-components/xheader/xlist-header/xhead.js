import React, {Component} from 'react';
import styles from './xhead.scss';

class Xhead extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [{
				clas: 'iconfont icon-shouye',
				text: '首页'
			},{
				clas: 'iconfont icon-gouwuche',
				text: '购物车'
			},{
				clas: 'iconfont icon-20150825tubiaolianxizhuanhuan03',
				text: '我的票牛'
			}],
			attr: false,
			isShowList: false,
			value: '搜索明星、演出、场馆'
		}
	}
	showHead() {
		this.setState({
			attr: true,
			isShowList: false,
			value: ''
		})
	}
	hideHead() {
		this.setState({
			attr: false,
			value: '搜索明星、演出、场馆'
		})
	}
	getInput(e) {
		this.setState({
			value: e.target.value
		})
	}
	list() {
		this.setState({
			isShowList: !this.state.isShowList
		})
	}
	render() {
		return (
			<div className={styles.search_header_home}>
				<div className={styles.ui_fixed_header,styles.full_header}>
					<div className={styles.topbar}>
						<div className={styles.city_picker}>返回</div>
						<div onClick={this.showHead.bind(this)} className={styles.ui_searchbox}>
							<div className={styles.ui_inner}>
								<div className={styles.ui_wrap}>
									<div className={styles.ui_icon,styles.icon_search}></div></div>
								<form action="">
									<input type="text" onClick={this.showHead.bind(this)} onInput={this.getInput.bind(this)} className={styles.search_input} value={this.state.value}/>
									<div className={styles.clear_input} style={{display:'none'}}></div>
								</form>
							</div>
						</div>
						<a href="#" onClick={this.list.bind(this)} className="iconfont icon-icon-more" style={{display:this.state.attr?'none':'block',fontSize:'24px',color:'#fff',height:'25px',width:'25px',backgroundSize:'25px 25px',marginRight:'10px'}}>
							<div className={styles.more_list} style={{display:this.state.isShowList?'block':'none'}}>
								<div className={styles.sanjiao}></div>
								{(function(self){
									return self.state.data.map(function(item,idx){
										return  <a href="#" className={styles.moreA} key={idx}>
													<i className={item.clas}></i>
													<span>{item.text}</span>
												</a>
									})
								})(this)}	
							</div>
						</a>
						<a href="#" onClick={this.hideHead.bind(this)} className={styles.person_icon} style={{display:this.state.attr?'block':'none',width:'40px',fontSize:'16px',color:'#fff'}}>取消</a>
					</div>
				</div>
			</div>
		)
	}
}

export default Xhead;
