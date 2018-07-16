import React,{ Component } from 'react'
import { connect } from 'react-redux'
import styles from './xglobal-search.scss'
//引进搜索页面基本组件
import Xsimple_header from '../../xheader/xsimple-header/xsimple-header'
import Xsearch_tag from '../../xlist/hot-searchTag-list/hot-searchTag-list'
import Xsearch_record from '../../xlist/search-record/search-record'
import Search_content_g from '../../xlist/global-search-content/global-search-content'

class Xglobal_search extends Component {
	constructor(props){
		super(props);
		this.state = {
			height: 0,
			send: '',
			field: ''
		}
	}
	render(){
		return (
			<div className={styles.search_box} style={{display:this.props.isShowGlobalSearch?'block':'none',height:this.state.height+'px'}}>
					<div className={styles.search}>
						<i className="iconfont icon-sousuo" style={{display:!this.props.isShowSearchPop?'block':'none'}}></i>
						<input placeholder="搜索明星、演出、场馆" onInput={this.change.bind(this)} ref={(input)=>{this.textInput=input}} autoFocus={this.props.isShowGlobalSearch?'autofocus':''}/>
						<i className="iconfont icon-cha1" style={{display:this.props.isShowSearchPop?'block':'none'}} onClick={this.props.closeContent}></i>
						<div className={styles.cancel} onClick={this.props.end}>取消</div>
					</div>
					<div style={{display:!this.props.isShowSearchPop?'block':'none',flexDirection:'column',overflowX:'hidden'}}>
						<Xsimple_header title="热门搜索"/>
						<Xsearch_tag />
						<Xsimple_header title="搜索记录"/>
						<Xsearch_record title={this.state.send}/>
					</div>
					<div style={{display:this.props.isShowSearchPop?'block':'none'}}>
						<Search_content_g field={this.state.field}/>
					</div>
			</div>
		)
	}
	componentDidMount(){
		this.setState({
			height: window.innerHeight
		})
	}
	componentWillReceiveProps(nextProps){
		if(this.props.giveValue!=nextProps.giveValue){
			this.textInput.value=nextProps.giveValue;
			this.props.inputs(nextProps.giveValue);
			this.setState({
				field: nextProps.giveValue
			})
		}
	}
	change(){
		var str = this.textInput.value;
		var str1 = str?
					str.match(/[A-z|0-9]+/g)?
						true:false
					:true
		if(str1){
		}else{
			if(str){
				this.props.start();
				this.setState({
					field: str
				})
				if(!localStorage.getItem('searchRecords')){
					localStorage.setItem('searchRecords',JSON.stringify([].concat(str)));
				}else{
					//用户输入，如果输入内容与之前重复的，删除之前重复的，
					//并将此次输入推送至最新,增强用户体验感
					var records = JSON.parse(localStorage.getItem('searchRecords'));
					if(records.indexOf(str)==-1){
						
					}else{
						records.splice(records.indexOf(str),1);
					}
					records = records.concat(str).reverse();
//					records = new Set(records);
//					records = Array.from(records);
					localStorage.setItem('searchRecords',JSON.stringify(records));
					this.setState({
							send: str
					})
				}
				
				//this.props.inputs(str);
			}
		}
	}
	
}

export default connect((state)=>{
	return state
},(dispatch)=>{
	return {
		start: ()=>{
			dispatch({
				type: 'willSearch',
				isShowSearchPop: true
			})
		},
		end: ()=>{
			dispatch({
				type: 'showGlobalSearch',
				isShowGlobalSearch: false
			})
		},
		closeContent: ()=>{
			dispatch({
				type: 'willSearch',
				isShowSearchPop: false
			})
		},
		inputs: (val)=>{
			dispatch({
				type: 'willSearch',
				search: val,
				isShowSearchPop: true
			})
		}
	}
})(Xglobal_search)

