import React,{Component} from 'react';
import FileUpload from './components/FileUpload';
import Test from './components/Test';
import './App.css';
class App extends Component {
render() {
    return ( 
  <div className='container-fluid'>
  <h4>{"Upload Your Files"}</h4>
  <div className="row">
  <div className="col-3"><FileUpload /></div>
  <div className="col-9"><Test/></div>  
  </div>
  </div>
);
}
}
export default App;







//https://www.youtube.com/watch?v=b6Oe2puTdMQ