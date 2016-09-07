import React,{Component} from 'react';
import ItemRow from './item-row.jsx'
class StickyListView extends Component{
    constructor(props){
        super();
        this.state = { loading:true,
            data:null,
            errorCode:null
        };
    }
    componentDidMount(){
        this.props.promise.done(
            (data) => {
                this.setState({loading:false,data:data});
            }
        ).fail(
            (xhr,errorCode) =>{
                this.setState({loading:false,errorCode:errorCode});
            }
        );
    }
    render(){
        if( this.state.loading){
            return (<div>loading ing……</div>);
        }else if(this.state.errorCode){
            return (<div>error {this.state.errorCode}</div>);
        }else if(this.state.data){
            var rows = [];
            this.state.data.forEach((e) => {
                rows.push(<ItemRow id={e.id} name={e.name} key={e.id}/>);
            });
            return (
                <div className="mod-sticky-list-view">
                    <div className="header">
                        <div className="container"></div>
                    </div>
                    <div className="content">
                        <div className="container">
                            <ul>
                                {rows}
                            </ul>

                        </div>
                    </div>
                </div>
            );
        }

    }
}
export default StickyListView;
