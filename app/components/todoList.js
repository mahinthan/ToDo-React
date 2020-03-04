/**
 * Created by MurugamahinthanUthay on 01/09/2017.
 */
import React from 'react';
import PropTypes from 'prop-types';
import Todo from './todo';

const TodoList = ({todos, onTodoClick}) =>(
    <ul>
        {todos.map((todo, index) => (
            <Todo {...todo} key={index} onClick={onTodoClick} />
        ))}
    </ul>
)

TodoList.propTypes = {
    todos : PropTypes.Array.isRequired,
    onTodoClick : PropTypes.func.isRequired
}

export default TodoList;