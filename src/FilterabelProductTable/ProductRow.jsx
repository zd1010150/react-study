var React=require('react');
var ProductRow=React.createClass({
    render:function(){
       var stockClass= this.props.product.stocked?'stock':'';
        return (
            <tr>
                <td className={stockClass}>
                    {this.props.product.name}
                </td>
                <td>{this.props.product.price}</td>
            </tr>
        );
    }
});
module.exports=ProductRow;