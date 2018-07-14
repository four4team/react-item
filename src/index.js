import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

//插件轮播图css样式
import 'antd/dist/antd.css';
import './static/css/base.css';
import './static/iconfont/iconfont.css';

//首页
import Home from './pages/home';
//商品详情页
import Details from './pages/details';
//演唱会页面
import Concert from './pages/concert';
//话剧歌剧
import Opera from './pages/Opera';
//休闲展览
import Xiuxian from './pages/xiuxian'
//体育赛事页
import Sports from './pages/sports'
//秒杀页
import Kill from './pages/kill'
//戏曲综艺页
import Xiqu from './pages/xiqu'
//各类票展示页
import Exhibit from './pages/exhibit'
//创建仓库
const store = createStore((state = {
	isShowNotice: false,
	isShowDetails: false,
	willLoad: false,
	isShowPop: false,
	sortType: '',
	search: '',
	isShowSearchPop: false
}, action) => {
	switch(action.type) {
		case 'notice':
			return Object.assign({}, state, {
				isShowNotice: action.isShowNotice
			});
		case 'details':
			return Object.assign({}, state, {
				isShowDetails: action.isShowDetails
			});
		case 'loading':
	      	return Object.assign({},state,{
	      		willLoad: action.willLoad
	      	});
	    case 'showPop':
	    	return Object.assign({},state,{
	    		isShowPop: action.isShowPop
	    	});
	   	case 'sort':
	   		return Object.assign({},state,{
	   			sortType: action.sortType
	   		});
	   	case 'willSearch':
	   		return Object.assign({},state,{
	   			search: action.search,
	   			isShowSearchPop: action.isShowSearchPop
	   		});
		default:
			return state
	}
});


//配置路由
ReactDOM.render(
	<Router>
		<Provider store={store}>
			<div>
				<Route exact path="/" component={Home} />
				<Route path="/details" component={Details} />
				<Route path="/concert" component={Concert} />
				<Route path="/kill" component={Kill} />
				<Route path="/exhibit" component={Exhibit} />
				<Route path="/Opera" component={Opera} />
				<Route path="/Xiqu" component={Xiqu} />
				<Route path="/sports" component={Sports} />
				<Route path="/xiuxian" component={Xiuxian} />
			</div>
		</Provider>
	</Router>,
document.getElementById('root')
)
