import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

//插件轮播图css样式
import 'antd/dist/antd.css';
import './static/css/base.css';
import './static/iconfont/iconfont.css';

//商品详情页
import Details from './pages/details';
//演唱会页面
import Concert from './pages/concert';


import {Provider} from 'react-redux';
import {createStore} from 'redux';
//创建仓库
const store = createStore((state = {
	isShowNotice: false,
	isShowDetails: false
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
		default:
			return state
	}
});


//配置路由
ReactDOM.render(
	<Router>
		<Provider store={store}>
			<div>
				<Route exact path="/details" component={Details}/>
				<Route path="/concert" component={Concert}/>
			</div>
		</Provider>
	</Router>,
document.getElementById('root'));
