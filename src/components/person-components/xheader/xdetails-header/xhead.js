import React, { Component } from 'react';
import './xhead.css';

class Xhead extends Component {
	retu() {
		window.history.go(-1);
	}
  render() {
    return (
      	<nav className="navbar">
      		<div onClick={this.retu.bind(this)} className="btn-left">返回</div>
      		<div className="middle-wrap">
      			<div className="middle-title">演出详情</div>
      		</div>
      	</nav>
    );
  }
}

export default Xhead;
