var React=require('react');
var CategoryRow=React.createClass({
    render:function(){
        return (
            <tr>
                <td colSpan="2">
                    {this.props.category}
                </td>
            </tr>
        );
    }
});

module.exports=CategoryRow;