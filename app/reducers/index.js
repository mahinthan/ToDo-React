/**
 * Created by MurugamahinthanUthay on 01/09/2017.
 */
import {combineReducers} from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';

const todoApp = combineReducers({todos, visibilityFilter});