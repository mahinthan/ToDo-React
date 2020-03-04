/**
 * Created by MurugamahinthanUthay on 01/09/2017.
 */
import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {setVisibilityFilter} from '../actions';
import Views from '../components/views';

const mapStateToProps = (state, ownProps) =>{
    return {
        active: ownProps.filter === state.filter
    }
}

const mapDispatchToProps = (dispatch, ownProps) =>{
    return{
        onClick : dispatch(setVisibilityFilter(ownProps.filter))
    }
}

const FilteredViews = connect(mapStateToProps, mapDispatchToProps)(Views);