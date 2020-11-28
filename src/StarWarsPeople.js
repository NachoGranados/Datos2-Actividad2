import './App.css';

import React from 'react'
import StarWarsCharacter from './StarWarsCharacter';

export default class StarWarsPeople extends React.Component {

    constructor(props) {
        super(props);
        this.state = {characters : []};
        this.loadData = this.loadData.bind(this);
    }

    componentDidMount() {
        this.loadData();
    }

    render() {
        if (this.state.characters.length === 0) {
            return <>No data found</>
        }
        return( 
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Height</th>
                        <th>Mass</th>
                        <th>Hair Color</th>
                        <th>Skin Color</th>
                        <th>Eye Color</th>
                        <th>Birth Year</th>
                        <th>Gender</th>
                    </tr>
                </thead>

                <tbody>

                    {this.state.characters.map((c, index) =>
                        <StarWarsCharacter characterData = {c}/>
                    )}
                       
                </tbody>      
            </table>
        );
    }

    async loadData() {
        const response = await fetch("https://swapi.dev/api/people/");
        const parsedResponse = await response.json();
        this.setState({
            characters: parsedResponse.results || []
        })
    }

}