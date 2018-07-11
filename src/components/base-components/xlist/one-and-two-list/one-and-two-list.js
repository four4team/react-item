import React,{Component} from 'react'
import styles from './one-and-two-list.scss'

class Xpush extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
			<ul className={styles.push}>
				{this.props.list.slice(0,1).map((item,i)=>{
					return <li key={i}>
								<span>{item.title}</span>
								<span>{item.desc}</span>
								<span>{item.info}</span>
								<img src={item.imgurl} style={{width:"100%",height:"90px"}}/>
							</li>
				})}
				<div>
				{
					this.props.list.slice(1,3).map((item,i)=>{
						return <li key={i}>
									<div>
									<span>{item.title}</span>
									<span>{item.desc}</span>
									<span>{item.desc_2}</span>
									</div>
									<img src={item.imgurl} style={{float:"right"}}/>
								</li>
					})
				}
				</div>
			</ul>
		)
	}
}

export default Xpush
