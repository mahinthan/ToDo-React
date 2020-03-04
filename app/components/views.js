/**
 * Created by MurugamahinthanUthay on 01/09/2017.
 */
import React from 'react'
import PropTypes from 'prop-types';
import FilteredViews from '../containers/filteredViews';

const views = () => (
    <div>
        <FilteredViews filter="SHOW_ALL">Show All</FilteredViews>
        <FilteredViews filter="SHOW_COMPLETED">Show Completed</FilteredViews>
    </div>
)