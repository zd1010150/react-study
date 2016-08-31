var React=require('react');
var Input=React.createClass({
    getInitialState:function(){
        return {
            personName:'zhangsan'
        };
    },
    handleChange:function(event){
        this.setState({
            personName:event.target.value
        });
    },
    render:function(){
        return(<div>
            <input type="text" value={this.state.personName} onChange={this.handleChange}/>
            <br/>
            hi,{this.state.personName}
        </div>);
    }
});

module.exports=Input;