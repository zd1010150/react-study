import ReactDOM from 'react-dom'
import React from 'react'
import Tick from './tick.jsx'

ReactDOM.render(
	<Tick tickIniCount={Tick.defaultProps.tickIniCount}></Tick>,
	document.getElementById("test")
	)