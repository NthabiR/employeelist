
// import './App.css';
//import Create from './components/create';
//import Index from './home';
//import Signedin from './components/signedin';
import React from "react";
import Create from './create';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Signedin from './components/signedin';
import Signin from './components/signin';
import Update from './components/update'


function App() {
  return (
    <div className="App">
       <Router>
      {/*<Create/> */}
      {/* <Signedin/> */}
    {/* <ul>
      <li>
        <Link to="/home">home</Link>
      </li>
      <li>
        <Link to="/create">create</Link>
      </li>
    </ul> */}
     
        <Switch>
      
       {/*   <Route exact path ="/" component={Index}/> */}
          
        {/*  <Route exact path ="/signedin" component={Signedin}/>
           */}
         <Route exact path ="/" component={Update}/>
          
          <Route exact path ="/create">
          <Create/>
          </Route>
          <Route exact path ="/signedin">
          <Signedin/> 
          </Route>
          <Route exact path ="/signin">
          <Signin/>
          </Route>
          <Route exact path="/update">
          <Update/>
          </Route>
        </Switch>
      </Router>

      </div>
  );
}

export default App;
