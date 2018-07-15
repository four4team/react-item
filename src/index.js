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
//音乐会页
import Music from './pages/music';
//秒杀页
import Kill from './pages/kill'
//戏曲综艺页
import Xiqu from './pages/xiqu'
//各类票展示页
import Exhibit from './pages/exhibit'
//舞蹈芭蕾页面
import Xdancing from './pages/dance'
//休闲展览页面
import Xrelaxing from './pages/relax'
//个人主页页面
import Xpersonal from './pages/personal'
//登录页面
import Xlogin from './pages/login'

//创建仓库
const store = createStore((state = {
	isShowNotice: false,
	isShowDetails: false,
	texts: '综合排序',
	isShowCalendar: false,
	willLoad: false,
	isShowPop: false,
	sortType: '',
	search: '',
	isShowSearchPop: false,
	sortText:'',
	navImgurl:'',
	navText:''
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
	   	case 'calendar':
	    	return Object.assign({},state,{
	    		isShowCalendar: action.isShowCalendar
	    	});
	   	case 'willSearch':
	   		return Object.assign({},state,{
	   			search: action.search,
	   			isShowSearchPop: action.isShowSearchPop
	   		});
      	case 'sortJustify':
      	return Object.assign({},state,{
      		sortText: action.sortText
      	});
      	case 'sendNavData':
      	return Object.assign({},state,{
      		navImgurl: action.navImgurl,
      		navText:action.navText
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
				<Route exact path="/" component={Home}/>
				<Route path="/details" component={Details}/>
				<Route path="/concert" component={Concert}/>
				<Route path="/music" component={Music}/>
				<Route path="/kill" component={Kill}/>
				<Route path="/exhibit" component={Exhibit}/>
				<Route path="/Opera" component={Opera}/>
				<Route path="/Xiqu" component={Xiqu}/>
				<Route path="/sports" component={Sports}/>
				<Route path="/xiuxian" component={Xiuxian}/>
				<Route path="/relax" component={Xrelaxing}/>
				<Route path="/person" component={Xpersonal}/>
				<Route path="/login" component={Xlogin}/>
				<Route path="/dance" component={Xdancing}/>
			</div>
		</Provider>
	</Router>,
document.getElementById('root')
)
