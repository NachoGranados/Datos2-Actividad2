import './App.css';

import React from 'react'

export default class StarWarsCharacter extends React.Component {

    constructor(props) {
        super(props);
        this.name = this.props.name;
        this.height = this.props.height;
        this.mass = this.props.height;
    }

}