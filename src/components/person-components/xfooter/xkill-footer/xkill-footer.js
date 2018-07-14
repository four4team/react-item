import React, {Component } from 'react'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import styles from './xkill-footer.scss'

class Xkill_footer extends Component {
	render() {
		return(
			<div className={styles.bottom}>
				<Link to="/" className={styles.btn_more}>去票牛，看更多折扣演出</Link>
				<div className={styles.title}>
					<div className={styles.leftLine}></div>
					<h3 style={{color:'#fff',flex:1,textAlign:'center',fontWeight:'bold',fontSize:'17px'}}>活动规则</h3>
					<div className={styles.rightLine}></div>
				</div>
				<div className={styles.campain}>* 每日秒杀<br/>（1）每个用户每场秒杀限购一张,每自然周只可参与一次秒杀；<br/>
				（2）秒杀活动仅允许本人抢购, 收货人手机号与注册手机号必须一致；<br/>
				（3）拍下后快递邮寄需付邮费10元，V2级以上会员包邮；<br/>
				（4）用户拍下价格即为成交价，拍下票品不退不换； <br/>
				（5）秒杀活动中票品可能为正价票，赠票，非卖品；<br/>
				（6）秒杀中部分现场自取票品会改成快递邮寄。<br/><br/>
					* 限时特惠<br/>
				（1）票牛app专享，2张及以上立享9.6折，最高立减20元；<br/>
				（2）每日更新的特惠项目，每位用户仅享受一次活动折扣；<br/><br/>针对以上两项活动<br/>
					*使用不公平手段抢购或恶意占用库存者，一经发现订单取消处理，情节严重者将被禁止参与平台优惠活动。
				</div>
			</div>
		)
	}
}

export default Xkill_footer