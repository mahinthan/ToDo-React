/**
 * Created by MurugamahinthanUthay on 01/09/2017.
 */
let nextTodoId = 0;

export const addTodo = text => {
    return {
        type : 'ADD_TODO',
        text,
        id : ++nextTodoId,
        completed : false
    }
}

export const toggleTodo = id =>{
    return {
        type : 'TOGGLE_TODO',
        id
    }
}

export const setVisibilityFilter = filter =>{
    return{
        type : 'SET_VISIBILITY',
        filter
    }
}