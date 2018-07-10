import React, { Component } from 'react';
import './xhead.css';

class Xhead extends Component {
  render() {
    return (
      	<nav className="navbar">
      		<div className="btn-left">返回</div>
      		<div className="middle-wrap">
      			<div className="middle-title">演出详情</div>
      		</div>
      	</nav>
    );
  }
}

export default Xhead;
