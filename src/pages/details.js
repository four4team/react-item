import React, {Component} from 'react';

//头部
import Xhead from '../components/person-components/xheader/xdetails-header/xhead';
//基本信息部分
import Xmain from '../components/person-components/xmain/xdetails-main/xmain';
//演唱简介部分
import Xintro from '../components/person-components/xintro/xdetails-intro/xintro';
//评论部分
import Xcomment from '../components/person-components/xcomment/xdetails-comment/xcomment';
//相关演出部分
import Xrelated from '../components/person-components/xrelated/xdetails-related/xrelated';
//底部
import Xfooter from '../components/person-components/xfooter/xdetails-footer/xfooter';


class Home extends Component {
	render() {
		return(
			<div>
				<Xhead/>
				<Xmain/>
				<Xintro/>
				<Xcomment/>
				<Xrelated/>
				<Xfooter/>
			</div>
		);
	}
}
export default Home;

