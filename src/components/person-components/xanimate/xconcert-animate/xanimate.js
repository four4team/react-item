import React, {Component} from 'react';
//轮播图插件
import { Carousel } from 'antd';
import styles from './xanimate.scss';

class Xanimate extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				'http://img0.imgtn.bdimg.com/it/u=1312875883,3901067313&fm=27&gp=0.png',
				'http://p1.music.126.net/dUMlFlUEA6lWmKiHuhJ6Xg==/109951163406409460.jpg',
				'http://p1.music.126.net/Rr3anSJehpxy8qqNLql6jQ==/109951163404707619.jpg',
				'http://img5.imgtn.bdimg.com/it/u=778696227,3076099280&fm=11&gp=0.png',
				'http://p1.music.126.net/nQUTIQMRHGTWQubs3PFb0g==/109951163406411778.jpg'
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
