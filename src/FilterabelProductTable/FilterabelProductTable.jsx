var React=require('react');
var SearchBar=require('./SearchBar.jsx');
var ProductTable=require('./ProductTable.jsx');
var FilterabelProductTable=React.createClass({
    getInitialState:function(){
       return {
           filterText:'',
           inStockOnly:false
       };
    },
    handleChange:function(filterText,inStockOnly){

        this.setState({
            filterText:filterText,
            inStockOnly:inStockOnly
        });
    },
    render:function(){
        var tableStyle={
            border:'1px solid red',
            backgroundColor:'yellow'
        };
        return (
           <div style={tableStyle}>
                <SearchBar filterText={this.state.filterText} inStockOnly={this.state.inStockOnly} onInputChange={this.handleChange}></SearchBar>
                <ProductTable products={this.props.products} filterText={this.state.filterText} inStockOnly={this.state.inStockOnly}></ProductTable>
           </div>
        );
    }
});
module.exports=FilterabelProductTable;