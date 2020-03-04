/**
 * Created by MurugamahinthanUthay on 01/09/2017.
 */
const todos = (state = [], action) =>{
    switch(action.type){
        case 'ADD_TODO' :
            return [...state, {text : action.text, completed : action.completed, id : action.id}]
        break;
        case 'TOGGLE_TODO' :
            return state.map((todo, index)=>{
                if(todo.id === action.id)
                    todo.completed = !todo.completed
                todo
            })
        break;
        default :
            return state
        break;
    }
}

export default todos;