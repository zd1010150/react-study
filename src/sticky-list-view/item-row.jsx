import React,{Component} from 'react';
class ItemRow extends Component{
    constructor(props){
        super(props);
    }
    render (){
        return (
            <li className="slv-item" id={this.props.id}> {this.props.name}</li>
        );
    }

}
export default ItemRow;
