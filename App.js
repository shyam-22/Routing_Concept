import React, { Component } from 'react';
import Navigation from './component/navigation';

import {Route} from "react-router-dom";

import Home from "./component/home/home";
import About from "./component/about/about";
import Services from "./component/services/services";
import Admin from "./component/admin/admin";

import ServiceDetails from "./component/servicedetails/servicedetails";



class App extends Component {
  render()
  {
    return (
        <React.Fragment>
           <Navigation/>
           <div className="container">
             <Route path="/home" Component={Home}/>
             <Route path="/about" Component={About}/>
             <Route path="/services" Component={Services}/>
             <Route path="/serviceDetails/:id" Component={ServiceDetails}/> 
             <Route path="/admin" Component={Admin}/>
             <Route path="/" exact Component={Home}/>

{/* we can use here <switch>also</switch>.....u don't need to write exact */}

           </div>
        </React.Fragment>
       
     
    )
  }
  
};

export default App;
