import React,{Component} from 'react'
import Xmovie_head from '../../xheader/xmovie-head/xmovie-head'
import Xmovie_list_one from '../movie-list-one/movie-list-one'
import $ from 'jquery'

class Home_kind extends Component {
	constructor(props){
		super(props);
		this.state = {
			list: []
		}
	}
	
	componentDidMount(){
		var self = this;
		$.ajax({
			type: "get",
			url: "http://119.23.55.48:8080/ticket",
			data: self.props.options,
			success(msg){
				self.setState({
					list: msg
				})
				
			}
		})
	}
	
	render(){
		return (
			<div style={{padding:"32px 0 8px 0"}}>
				<Xmovie_head classify={this.props.classify}></Xmovie_head>
				{(function(self){
					if(self.state.list[0]!=null){
						return <Xmovie_list_one list={self.state.list} names={self.props.names}></Xmovie_list_one>
					}else{
						return 
					}
				})(this)}
				
				
			</div>
		)
	}
	
	
}

export default Home_kind
