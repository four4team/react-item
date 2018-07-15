import React,{ Component } from 'react'
import {connect} from 'react-redux'
import styles from './search-record.scss'

class Xsearch_record extends Component {
	constructor(props){
		super(props);
		this.state = {
			records: []
		}
	}
	render(){
		return (
			<ul className={styles.record}>
				{(function(self){
					
					if(self.state.records[0]!=null){
						return self.state.records.map((item,i)=>{
									return <li key={i}>
												<span onClick={self.props.tagInput.bind(self,item)}>{item}</span>
												<i onClick={self.deletes.bind(self,item)}>删除</i>
											</li>
								})
					}
				})(this)}
				{(function(self){
					if(self.state.records[0]!=null){
						return <li onClick={self.clearRecords.bind(self)}>清除历史记录</li>
					}
				})(this)}
			</ul>
		)
	}
	componentDidMount(){
		var record=JSON.parse(localStorage.getItem('searchRecords'));
		this.setState({
			records: record
		})
	}
	deletes(msg){
		var record=JSON.parse(localStorage.getItem('searchRecords'));
		record.splice(record.indexOf(msg),1);
		//好像不能删掉这一句，但是页面获取数据明明是把获取放在结构中去
		this.setState({
			records: record
		})
		localStorage.setItem('searchRecords',JSON.stringify(record));
	}
	componentWillReceiveProps(nextProps){
		//根据用户输入的前后输入的对比,判断是否更新数据
		if(this.props.title!=nextProps.title){
			var record=JSON.parse(localStorage.getItem('searchRecords'));
			this.setState({
				records: record
			})
		}
	}
	clearRecords(){
		this.setState({
			records: []
		})
		localStorage.removeItem('searchRecords');
	}
}

export default connect((state)=>{
	return state
},(dispatch)=>{
	return {
		tagInput: (val)=>{
			dispatch({
				type: 'willGiveValue',
				giveValue: val
			})
		}
	}
})(Xsearch_record)
