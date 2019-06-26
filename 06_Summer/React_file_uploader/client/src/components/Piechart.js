import React,{Component} from 'react';
class PieChart extends Component{
state ={A: [],B:{}}
handleClick(d) {
    console.log(d);
}
proces(dataset){
  //for (var a in dataset){
    this.setState({A:dataset})
  //}
  var aa={}
  for(var a in dataset){
    aa=dataset[a].map((d, i) => ( <td>{d}</td>));
  }
    this.setState({B:aa})
    //console.log("Pie",this.state.B)
}
render(){
return(
<div>
<form>
<input type="text" onChange={this.mychangeHandler}></input>
<button type="button" onClick={() => this.proces(this.props.dataset)}>{"Click me2"} </button>
</form>
<table>
{this.state.A.map( (data,i) => { 
        return <tr>{data.map((data, i) => ( <td>{data}</td>))}</tr>
})}
</table>
</div>
)
}}
export default PieChart;
