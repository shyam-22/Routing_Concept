import React, { Component } from "react";
import NavUi from "./navUI";
// import Home from "./home/home";
// import About from "./about/about";
// import Services from "../component/services/services";
// import Admin from "../component/admin/admin";
//import ServiceDetails from "./servicedetails/servicedetails";

class Navigation extends Component
{
    render()
    {
        return(
            <React.Fragment>
                <NavUi/>
                </React.Fragment>
        )
    }
};
export default Navigation;

