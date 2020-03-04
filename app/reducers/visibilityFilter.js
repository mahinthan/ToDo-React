/**
 * Created by MurugamahinthanUthay on 01/09/2017.
 */
const visibilityFilter = (state = 'SHOW_ALL', action) => {
    switch(action.type){
        case 'SET_VISIBILITY' :
            return action.filter;
        break;
        default :
            return state;
        break;
    }
}

export default visibilityFilter;