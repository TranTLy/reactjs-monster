import React, { Component } from 'react';

class SODP0001 extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users").then(res => {
            console.log(res.json());
        })
    }
    render() {
        return (
            <div>
                <div>
                </div>
                SODP0001
            </div>
        );
    }
}

export default SODP0001;