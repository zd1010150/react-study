import React, {Component} from 'react'
import TickParent from './tick-parent.jsx'

export default class Tick extends TickParent{
	
	constructor(props){
		super(props);
		this.state = {count: props.tickInitCount};
		this.tick = this.tick.bind(this);
	}
	componentDidMount(){
		this.intervals = [];
		this.tick();
	}

	tick(){
		this.setInterval(
			()=>{this.setState({count:this.state.count + 1});},
			1000
			);
	}
	render(){
		return <div>this has runing:{this.state.count}</div>;
	}

}
Tick.propTypes = {tickInitCount:React.PropTypes.number};
Tick.defaultProps = {tickInitCount:0};