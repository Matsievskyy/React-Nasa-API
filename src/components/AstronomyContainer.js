import React, { Component } from 'react';
import AstronomyCard from './AstronomyCard';
import axios from 'axios';

class AstronomyContainer extends Component {
    state ={
        astronomy: []
    }
    componentDidMount() {
        const API_KEY = 'OcHmRVTkygJIEp6xyajgvM8npBUC5tIfphQrMO7L';
        const END_POINT = 'https://api.nasa.gov/planetary/apod?api_key=';

        axios.get(END_POINT+API_KEY)
            .then(resp => {
                this.setState({
                    astronomy: resp.data
                })

                console.log(this.state.astronomy)
            })
            .catch(err => {
                console.log(err)
            });
    }

    render () {
        const { astronomy } = this.state
        return (
            <AstronomyCard data={astronomy}/>
        )
    }
}

export default AstronomyContainer;