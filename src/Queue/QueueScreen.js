import React, { Component } from 'react';
import base64 from 'base-64';

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customers: []
        };
    }

    componentDidMount() {
        const headers = new Headers();
        headers.set('Authorization', 'Basic ' + base64.encode("codetest1:codetest100"));
        fetch('api/queue/gj9fs', {
            method: 'GET',
            headers
        }).then(response => response.json())
            .then(json => {
                this.setState({
                    customers: json.queueData.queue.customersToday
                })
            });
    }

    render() {
        let customers = [];
        for(let i = 0; i < this.state.customers.length; ++i) {
            customers.push(
                <div key={this.state.customers[i].id}>
                    <div>
                        {this.state.customers[i].customer.name}
                    </div>
                </div>
            );
        }

        return (
            <div>
                {
                    customers
                }
            </div>
        );
    }
}
