import './App.css';

import React from 'react'

export default class StarWarsPeople extends React.Component {

    constructor(props) {
        super(props);
        this.state = {data : []};
        this.getData();
    }
    
    getData() {
        fetch(" https://swapi.dev/api/people/")
            .then(response => {
                return response.json();
            }).then(result => {
                this.setState({
                    data : result
                });
        }).catch(error => {
            console.log(error);
        });
    }


















    render() {
        return (
                <div>{this.props.count > 60 ? "Peligro! la cantidad de segundos ha excedido el límte!!!" :
""}</div>
    );
    }
}