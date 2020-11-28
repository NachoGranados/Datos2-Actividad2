import './App.css';

import React from 'react'

export default class StarWarsCharacter extends React.Component {

    constructor(props) {
        super(props);
        this.characterData = this.props.characterData
    }

    render() {
        return (
        
            <tr>

                <td>{this.characterData.name}</td>
                <td>{this.characterData.height}</td>
                <td>{this.characterData.mass}</td>
                <td>{this.characterData.hair_color}</td>
                <td>{this.characterData.skin_color}</td>
                <td>{this.characterData.eye_color}</td>
                <td>{this.characterData.birth_year}</td>
                <td>{this.characterData.gender}</td>

            </tr>
       
        

 

        //<th>{this.state.characters[0].name}</th>
        //<th>{this.state.characters[0].height}</th>
        //<th>{this.state.characters[0].mass}</th>
            
        );
    }


}