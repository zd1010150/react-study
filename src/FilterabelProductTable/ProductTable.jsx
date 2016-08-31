var React=require('react');
var ProductRow=require('./ProductRow.jsx');
var ProductCategoryRow=require('./ProductCategoryRow.jsx');
var ProductTable=React.createClass({
    render:function(){
        var products=this.props.products;
        var rows=[],categoried={};
        var filterText=this.props.filterText;
        var inStockOnly=this.props.inStockOnly;
        products.forEach(function(p,index){

            var _category= p.category;
            if(!categoried[_category]){
                categoried[_category]=[];
            }
            if(filterText.trim().length<1||(p.name.indexOf(filterText)>-1)){
                if(inStockOnly&&(!p.stocked)){
                    return;
                }
                console.log("==="+filterText+"||"+p.name+"  "+p.name.indexOf(filterText));
                categoried[_category].push(

                    <ProductRow product={p} key={index}></ProductRow>
                );
            }


        });
        for(var key in categoried){

            rows.push(<ProductCategoryRow category={key} key={key}></ProductCategoryRow>);
            rows.push(categoried[key]);
        }
        return (
            <table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>price</th></tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }
});
module.exports=ProductTable;