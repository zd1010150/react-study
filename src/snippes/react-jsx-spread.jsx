import React from 'react';
class JsxSpread extends React.Component{
	constructor(){
		super();
	}
	render(){
		return <a {...this.props}>{this.props.children}</a>
	}
}
export default JsxSpread;