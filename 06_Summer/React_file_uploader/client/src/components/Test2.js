import React,{Component} from 'react';
import * as d3 from 'd3';
import mydata from './testfile.csv';
class Test extends Component{
    state = {loadError:'',
    header:{},            
    data:[]
    };
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
    console.log(header,header.length)
    //this.setState({header: header});
}) 
} 
// ------------------------------------------- Render Function starts here
render() {
  this.process();
  return ( 
      <div> {console.log("Hello rendering")} </div>
);
}
}
export default Test;