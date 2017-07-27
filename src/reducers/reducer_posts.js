import _ from 'lodash';
import {FETCH_POSTS, FETCH_POST, DELETE_POST} from "../actions/index";

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_POSTS:
            console.log(action.payload.data); // [post1, post2]
            return _.mapKeys(action.payload.data, 'id'); // {id1:post1,id2:post2}
        case FETCH_POST:
            // E5
            // const post = action.payload.data;
            // const newState = {...state };
            // newState[post.id] = post;
            // return newState;

            // E6
            return {...state, [action.payload.data.id]: action.payload.data};
        case DELETE_POST:
            return _.omit(state, action.payload);
        default:
            return state;
    }
}