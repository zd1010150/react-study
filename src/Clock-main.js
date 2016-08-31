var Clock=require('./clock.jsx');
var Input=require('./input.jsx');
var React=require('react');
var reactDom=require('react-dom');
var app=(<div><Clock/><Input/></div>);
reactDom.render(app,document.getElementById('timer'));