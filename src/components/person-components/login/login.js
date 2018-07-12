import React, {
	Component
} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
//引用样式
import styles from './login.scss'
//引用字体图标
import '../../../static/iconfont/iconfont.css';


class Xregister extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			regBool: true,
			yanZhen: parseInt(Math.random() * 9000) + 1000
			
		}
	}
	/*切换不同登录方式的函数*/
	regToggle() {
		this.setState({
			regBool: !this.state.regBool
		})
	}
	/*点击登录按钮判断输入内容是否匹配的函数*/
	loginTest() {
		if(!/^1[3-8]\d{9}$/.test(this.refs.phoneNumber.value)) {
			alert('手机号码有误！请重新输入');
		} 
		if(this.state.yanZhen !== Number(this.refs.myinput.value)) {
			console.log(Number(this.refs.myinput.value))
			alert('验证码有误！请重新输入')
		} else {
			localStorage.setItem('islogin' ,JSON.stringify(false))
			localStorage.setItem('loginUserName' ,JSON.stringify(this.refs.phoneNumber.value))
			setTimeout(()=>{
						window.location.href='/person';
					},100)
		}
	}
	render() {
		return(
			<div className={styles.register}>					
					{
					(function(self){
						if(self.state.regBool){
							return <div><Link to="/person" className="iconfont icon-icon-test" style={{
								position: "absolute",
						        fontSize: "18px",
						        top: "14px",
						        left: "14px",
						        color: "#999"
							}}></Link>
							<h6 className={styles.regTitle}>手机快捷登录</h6>
							<div className={styles.regForm}>
							<div className={styles.row}>
          					<input ref="phoneNumber"  type="tel" placeholder="请输入手机号" maxLength="11" className={styles.input}/>
        					</div>
        					<div className={styles.row}>
         					 <input ref="myinput" type="tel" placeholder="请输入验证码" className={styles.input}/>
         					 <p id="yanZhenMa" style={{
         					 	width:"101px",
         					 	height:"46px",
         					 	border:"1px solid #f78",
         					 	position:"absolute",
         					 	top:"0",
         					 	right:"0",
         					 	textAlign:"center",
         					 	lineHeight:"46px",
         					 	letterSpacing:"6px",
         					 	color:"#f90"
         					 	}}>{self.state.yanZhen}</p>
           					</div>
    	   					<div className={styles.hint}>免注册，登录即创建票牛账户</div>
							<div className={styles.row}>
         					 <div onClick={self.loginTest.bind(self)} style={{
         					 	backgroundImage:"-webkit-linear-gradient(left, #f2295f, #ffbe2a)",
         					 	justifyContent: "center",
					            backgroundColor: "#ff2661",
					            color: "#fff",
					            textAlign: "center",
					            fontSize: "17px",
					            lineHeight: "45px",
					            opacity: "0.5"
         					 }}>登录</div>
        					</div>
        					<div style={{
        						marginAop: "16px",
					            textAlign: "center",
					            width: "100%",
					            color: "#5fb7fc"
        					}} onClick={self.regToggle.bind(self)}>账号密码登录</div>
						</div>
						</div>
		}
		else {
			return <div><div className={styles.regForm}>
						<a onClick={self.regToggle.bind(self)} className="iconfont icon-arrow-left" style={{
								position: "absolute",
						        fontSize: "18px",
						        top: "14px",
						        left: "14px",
						        color: "#999"
							}}></a>
							<h6 className={styles.regTitle}>账户密码登录</h6>
						<div className={styles.row}>
          					<input type="tel" placeholder="请输入手机号" maxLength="1" className={styles.input}/>
        				</div>
        				<div className={styles.row}>
         					 <input type="password" placeholder="请输入密码" className={styles.input}/>
       					</div>
						<div className={styles.row}>
         					 <div id="hBtn" style={{
         					 	backgroundImage:"-webkit-linear-gradient(left, #f2295f, #ffbe2a)",
         					 	justifyContent: "center",
					            backgroundColor: "#ff2661",
					            color: "#fff",
					            textAlign: "center",
					            fontSize: "17px",
					            lineHeight: "45px",
					            opacity: "0.5"
         					 }}>登录</div>
        				</div>
					</div>					
					</div>
		}
	})(this)
}
					</div>

		)
	}

}
export default Xregister;