import React, {Component} from 'react';
import './xintro.css';

class Xintro extends Component {
	constructor(props) {
		super(props);
		this.state = {
			height: false,
			html: <p>&nbsp;</p>
		}
	}
	loadMore() {
		this.setState({
			attr: true
		})
	}
	render() {
		return (
			<div className="section introduce">
				<div className="section-title">演出简介</div>
				<div className="content">
					<div className="inner" style={{height:this.state.attr?'auto':'300px'}}>
						<div className="cont">
							<p><img alt="" src="https://img.piaoniu.com/upload-ueditor-image-20180702-1530508790754073453.png"/></p>
							{this.state.html}
							<p><span>由朱正廷、范丞丞、黄明昊（Justin）、毕雯珺、丁泽仁、李权哲、黄新淳组成的乐华七子NEXT，自从进入大众视野以来，便以超高热度、话题度长期霸占热搜榜单，国民认知度持续上升，可以说是目前国内最炙手可热的优质偶像。他们接受了长时间全方位的专业培训和练习，展现出的超强专业素质和实力毋庸置疑。</span></p>
							{this.state.html}
							{this.state.html}
							<p><img alt="" src="https://img.piaoniu.com/upload-ueditor-image-20180702-1530508804653065673.png"/></p>
							{this.state.html}
							<p><span>这一次他们将通过巡演舞台的形式，向一直支持与喜爱自己的粉丝汇报训练成果，也是对自己业务能力的一次全面展示。在这次“2018乐华七子-NEXT巡回粉丝见面会”中，拥有不俗唱跳功力与综艺感的小哥哥们，将热力开唱并献上燃炸的舞台表演，还有粉丝专属互动环节，巡演舞台势必精彩纷呈，引人期待！</span></p>
							{this.state.html}
							<p><img alt="" src="https://img.piaoniu.com/upload-ueditor-image-20180702-1530508811182047587.png"/>&#8203;</p>
							{this.state.html}
						</div>
					</div>
					<div className="more" style={{display:this.state.attr?'none':'block'}}>
						<div className="shadow"></div>
						<div onClick={this.loadMore.bind(this)} className="text">展开更多<img src="https://static.piaoniu.com/nuxt-static/img/blueArrowDown.9e945aa.png"/></div>
					</div>
				</div>
			</div>
		)
	}
}

export default Xintro;
