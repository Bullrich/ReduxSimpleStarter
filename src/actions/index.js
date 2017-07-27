import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_post';
export const FETCH_POST = 'fetch_post';
export const DELETE_POST = 'delete_post';

const API_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=PAPERCLIP1234';

export function fetchPosts() {
    const request = axios.get(`${API_URL}/posts${API_KEY}`);

    return {
        type: FETCH_POSTS,
        payload: request
    };
}

export function createPost(values, callback) {
    const request = axios.post(`${API_URL}/posts${API_KEY}`, values)
        .then(() => callback()); // the 'then' waits for the promise to finish

    return {
        type: CREATE_POST,
        payload: request
    };
}

export function fetchPost(id) {
    const request = axios.get(`${API_URL}/posts/${id}${API_KEY}`);

    return {
        type: FETCH_POST,
        payload: request
    };
}

export function deletePost(id, callback){
    const request = axios.delete(`${API_URL}/posts/${id}${API_KEY}`)
        .then(() => callback());

    return{
        type: DELETE_POST,
        payload: id // no need to pass the whole post if it's being deleted
    };
}