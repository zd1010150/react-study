var React=require('react');
var SearchBar = React.createClass(
    {
        handleChange:function(){
            this.props.onInputChange(this.refs.filterText.value,this.refs.instockOnly.checked);
        },
        render:function() {
                return (
                    <form>
                         < div >
                         < input type = "text" placeholder = "search..." ref="filterText" onChange={this.handleChange} value={this.props.filterText}/>
                            < p >
                                < input type = "checkbox" ref="instockOnly" checked={this.props.inStockOnly} onChange={this.handleChange}/>
                                {' '}
                                Only show stocked
                            </p>
                        </div >
                    </form>
                );
        }}
    );
module.exports=SearchBar;