import React, {Component} from 'react';
import './xcomment.css';

class Xcomment extends Component {
	render() {
		return (
			<div className="detail-comment-container section">
				<div className="detail-comment-header section-title">
					<div className="text">所有评论(0)</div>
				</div>
				<div className="review-list">
					<li className="feed-item">
						<div className="feed-head">
							<div className="user-avatar" style={{backgroundImage:'url(https://img.piaoniu.com/mmopen/vi_32/Q0j4TwGTfTJ1pfSq6sJX8CdZ1JibF6rNR7ggfe9MJRjWBe9Up7j8Yibib7KfmKvK83ddk4PgLueHRibo2Sr9LIPLPg/132?imageView2/2/w/72/h/72/format/jpg/q/60)',width:'36px',height:'36px'}}></div>
							<div className="head-info">
								<div className="user-info">
									<div className="level-tag level-tag-small">
										<div className="level"><span className="v">V</span><small className="lv">1</small><span className="text">Lv1</span></div>
									</div>
								</div>
							</div>
						</div>
						<div className="feed-content">
							<div className="feed-review-content">
								<div className="rank-row" >
									<div className="text" >我评论：</div>
									<ul className="stars" >
										<li><img src="https://static.piaoniu.com/nuxt-static/img/starYellow.b0a4b5a.png"/></li>
										<li><img src="https://static.piaoniu.com/nuxt-static/img/starYellow.b0a4b5a.png"/></li>
										<li><img src="https://static.piaoniu.com/nuxt-static/img/starYellow.b0a4b5a.png"/></li>
										<li><img src="https://static.piaoniu.com/nuxt-static/img/starYellow.b0a4b5a.png"/></li>
										<li><img src="https://static.piaoniu.com/nuxt-static/img/starYellow.b0a4b5a.png"/></li>
									</ul>
								</div>
								<div className="content-row">
									<div className="content"><span className="text">能帮我留一张吗？</span>
										<a href="javascript:;" className="more" style={{display:'none'}}>全文</a>
									</div>
								</div>
								<div className="image-list" style={{display:'none'}}>
									<div className="inner"></div>
								</div>
							</div>
							<div className="feed-interaction">
								<div className="time">7月3日 19:08</div>
								<div className="interaction-button interaction-support"><img src="https://static.piaoniu.com/nuxt-static/img/support.4ae6417.png" className="icon support-icon"/><span className="num support-num">0</span></div>
								<div className="interaction-button interaction-comment"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAv5JREFUSA3tV81rE0EU39ldsy1tQQoeIi3Skx8IHkVBVARBKII9bPqRLA0pEXsTLYiCRLxIe/QgxFDSbbRNiyAIPXkp/QcUCxaxvVTtxRasgSSbj/H30uwy5ltwraADw755v/feb97bmZcNkzCCwcHefJ5Pcs7PY+klnQtjizG2rGnqRCz27BMbGxvpyWZzbzmXul0gqwrJmLSjaQdOqdlsfopIsZslxrSwaZqfq6x/g4ISzGTyUVT1SiaTm5TL5ZVQgutukdK+qbxtbWq4nMMFGULpnRJQVrr2EDi8RLwv4z/xHyv7vpVarZWiYQz6OC8+liT2Fbg+O5tcte3Gx8c7d3e3XzDGzwCPArttY/Rs5Cva1cyYSNFUDuGOH4fxfdEhldo2JIlfBt4F/FYwOHJCxBv5inY1icuZluzQ4ihrZzAmO2t0u1yhoHxzwJJQqtKeVOEr2tUhlnQEXZRl9qSjQ7knOsTjzxexmbvAX2H6anS7ur5iHOb365wUicQCEwG3ZJuvXsZu8Tpx/01ii/KPRCIepw4uCQKHJeOEviOejY21qy7xOWFtDuLEqfYF0RCmgVpQJHBPNx3LslAsFrmiKB/6+o4msetiJW6vA4HB04hxCeuq6qGx9KLp+AmTZTlUukKGoT/inE2gEzU8bLi3s2iR6FzVIxDwDcB/AYhSje5p4F9Eq50yzYU7zt0dHR06Vijwc9jZYezI0ZMLAmLNb1KbRObDMzNzc2LwUGj4iGXl3wA/iIynK6tGFYPui6KwlXh8bo18fyIQg1XKhuEbg/9TBN5pb/ecjEYTW2SD0qvr6++XsbmzyOglKnKt0rfWumFpRQfTTMYQeAlZdafTuZiNgTRSJt30eDpDtr7Zs+WMKVA47Pem09YqkaN0Ybyyj3gLr0HMVVW+GI/PrzQjtPFfIiYn+r3FO5uHmML8junFmXhgmvMRyC2PlkttRwRBEjKd3k5MfBqzlf7+gYc23uqz5hdIM2dN67phWake2LXj38eQruuFZj5/Df4D23Mx0b8AkskAAAAASUVORK5CYII=" className="icon comment-icon"/><span className="num comment-num">回复</span></div>
							</div>
						</div>
					</li>
				</div>
				<div className="show-all-comment">全部评论 0条</div>
			</div>
		)
	}
}

export default Xcomment;
