import React, { Component } from 'react';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = null;
    }
    render() { 
        return ( <div className="container">
            <div className="card black">
                <div className="card-content">
                    <div className="card-title">Home Component</div>
                    <p>Home Component works</p>
                </div>
            </div>
        </div> );
    }
}
 
export default Home;