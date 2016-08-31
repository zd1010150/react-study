import React, {Component} from 'react'
export default class TickParent extends Component{
	constructor(){
		super();
	}
	componentDidMount(){
		this.intervals = [];
	}
	setInterval() {
		this.intervals.push(setInterval.apply(null,arguments));
	}
	componentWillUnmount(){
		this.intervals.forEach(clearInterval);
	}
}