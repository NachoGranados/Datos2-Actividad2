import './App.css';

import React from 'react'

export default class StarWarsCharacter extends React.Component {

    constructor(props) {
        super(props);
        this.characterData = this.props.characterData
    }

    render() {
        return (
        <div>
            
            {this.characterData}
        </div>

 

        //<th>{this.state.characters[0].name}</th>
        //<th>{this.state.characters[0].height}</th>
        //<th>{this.state.characters[0].mass}</th>
            
        );
    }


}