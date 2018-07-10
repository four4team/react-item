import React, {Component} from 'react';
//轮播图插件
import { Carousel } from 'antd';
import styles from './xanimate.scss';

class Xanimate extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				'http://img3.imgtn.bdimg.com/it/u=793813422,3848437291&fm=27&gp=0.png',
				'http://img2.imgtn.bdimg.com/it/u=3533884248,3769124868&fm=27&gp=0.png',
				'http://img1.imgtn.bdimg.com/it/u=1411293729,1590582916&fm=27&gp=0.png',
				'http://img5.imgtn.bdimg.com/it/u=778696227,3076099280&fm=11&gp=0.png',
				'http://img0.imgtn.bdimg.com/it/u=1312875883,3901067313&fm=27&gp=0.png'
			]
		}
	}
	render() {
		return (
		  	<Carousel autoplay className={styles.animate}>
		  		{(function(self){
		  			return self.state.data.map(function(item,idx){
		  				return  <div key={idx}>
		  							<img className={styles.imgs} src={item}/>
		  						</div>
		  			})
		  		})(this)}
		    	
		  	</Carousel>
		)
	}
}

export default Xanimate;
