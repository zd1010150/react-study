var React = require('react');
var ReactDOM = require('react-dom');
//ReactDOM.render(
//    <h1>Hello, world,dan!</h1>,
//    document.getElementById('example')
//);
var HelloWorld = React.createClass({
    render: function () {
        return (<p>Hello2,
                    <input type="text" placeholder="your name here"/>

                    !It is {this.props.date.toTimeString()}
                </p>
        );
    }
});

setInterval(function () {
    ReactDOM.render(
        <HelloWorld date={new Date()}/>,
        document.getElementById('example')
    );
}, 500);

var li1=React.createElement("li",null,"chinese name");
var li2=React.createElement("li",null,"english name");
var ul=React.createElement("ul",{className:"names",id:"myname",dataTest:"li-si"},li1,li2);
ReactDOM.render(ul,document.getElementById('example1'));

/*定义一组组件*/
var MyFormComponent = React.createClass({
    render:function(){
        return (<div >form {this.props.children} </div>);
    }
});

MyFormComponent.Row = React.createClass({
    render:function(){
        return (<div className="row">row</div>);
    }
});
//MyFormComponent.Label = React.createClass({
//    render:function(){
//        return (<td>{this.props.label}</td>);
//    }
//
//});
//MyFormComponent.Input = React.createClass({
//    render:function(){
//        return (<td><input type={this.props.type} value={this.props.val}/></td>);
//    }
//});

var Form=MyFormComponent;

//var app=(<Form><Form.Row><Form.Label label='dan'/><Form.Input type='text' val='hi,dan'/></Form.Row></Form>);
var app=(<Form><Form.Row/></Form>);
ReactDOM.render(app, document.getElementById('example2'));