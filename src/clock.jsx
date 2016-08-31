var React=require("react");
var Clock=React.createClass({
    getInitialState:function(){
        return {
            timeElapse:0
        };
    },
    tick:function(){
        this.setState({timeElapse:this.state.timeElapse+1});
    },
    componentDidMount:function(){
        this.interval=setInterval(this.tick,1000);
    },
    componentWillUnmount:function(){
        clearInterval(this.interval);
    },
    render:function(){
        return <div>time elasped:{this.state.timeElapse}</div>;
    }
});
module.exports=Clock;