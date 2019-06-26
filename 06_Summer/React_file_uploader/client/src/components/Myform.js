import React, {Component} from 'react';
class Myform extends Component{
   state ={state1: " state 1"}
    mychangeHandler= event=>{ 
        this.setState({state1: event.target.value});
    }
    mySubmit = event=>{
        event.preventDefault();
        this.props.onsubmit(this.state.state1);
    }
    render(){

        return(
            <div>
            <form onSubmit={this.mySubmit}>
                <input type="text" onChange={this.mychangeHandler}></input>
                <button type="button">{this.props.mybutton} </button>
            </form> 

            </div>
        );
    }
}
export default Myform;
