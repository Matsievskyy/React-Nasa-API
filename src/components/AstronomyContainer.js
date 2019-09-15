import React, { Component } from 'react';
import AstronomyCard from './AstronomyCard';
import { connect } from 'react-redux';
import fetchData from '../store/actions'

class AstronomyContainer extends Component {

    componentDidMount() {
        this.props.fetchData();
    }

    render () {
        return (
            <AstronomyCard data={this.props.astr}/>
        )
    }
}

const mapStateToProps = state => {
    return{
        astr: state.astronomy
    }
}

export default connect(mapStateToProps, { fetchData })(AstronomyContainer);