// State argument is not application state, only the state
// reducer is responsible for
export default function(state = null, action){
    switch (action.type){
        case 'BOOK_SELECTED':
            action.payload;
    }
    return state;
}