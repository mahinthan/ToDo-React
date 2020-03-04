/**
 * Created by MurugamahinthanUthay on 01/09/2017.
 */

import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({id, text, completed, onClick}) =>{
    return (
        <li onClick={()=> onClick(id)} style={{textDecoration : completed ? 'line-through' : 'none'}}>{text}</li>
    )
}

Todo.propTypes = {
    onClick : PropTypes.func.isRequired,
    completed : PropTypes.bool.isRequired,
    text : PropTypes.string.isRequired,
    id : PropTypes.number.isRequired
}

export default Todo;