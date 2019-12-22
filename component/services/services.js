import React, { Component } from "react";

import {Link} from "react-router-dom";

class Services extends Component
{ 
    constructor()
    {
        super();
        this.state={
            services :[{
                id : 1 ,
                name: "service 1"

            },
            {
                id : 2,
                name: "service 2"

            },

            {
                id : 3 ,
                name: "service 3"

            }

        ]
        }
    }
    render()
    {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Services section</h1>
                        <ul>
                            {
                                this.state.services.map(data => (
                                <li key={data.id}> 
                                    <Link to = {' "../servicedetails/servicedetails.js"/${data.id}`}>
                                        {data.name}
                                    </Link>
                                </li>/
                                ))

                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
};

export default Services;