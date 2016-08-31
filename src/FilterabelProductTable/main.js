var React=require('react');
var ReactDOM=require('react-dom');
window.React = React;
var ProductTable=require('./FilterabelProductTable.jsx');
var products=[
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Sporting Goods', price: '$199.99', stocked: true, name: 'Nexus 7'},
    {category: 'Sporting Goods', price: '$299.99', stocked: true, name: 'Nexus 7'}
];

ReactDOM.render(
    <ProductTable products={products}/>,
    document.getElementById("test")
);


