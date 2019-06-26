import React,{Component} from 'react';
import * as d3 from 'd3';
import mydata from './testfile.csv';
import PieChart from './Piechart';
class Test extends Component{
  state ={A: {},
B: {}
}
// ------------------------------------------- Process function starts here
process=()=>{
  var data= [];
  var count=0;
  var header=[];
// -------------------- D3 function start here
  d3.csv(mydata, function(mdata) {
    var temp=[]
    if(count===0){
      for (var key in mdata){
        header.push(key);
    }
    //console.log(header)
    count=count+1;
  }
    for (var key in mdata){
      temp.push(mdata[key]);
    }
    data.push(temp);
    var temp=[];
    //this.setState({header: header});
})
//----------------D3 ends here
this.setState({B:data})
console.log(data) 
} 
// ------------------------------------------- Render Function starts here
render() {
  return ( 
<div> 
  <form>
    <button type="button" onClick={() => this.process()}>{"Click me"} </button>
  </form> 
  <PieChart dataset={this.state.B} />
</div>
);
}
}
export default Test;