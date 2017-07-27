# Firebase Implementation

### Action creator
```jsx
import Firebase from 'firebase';

const Posts = new Firebase('frb_url');

export function fetchPosts() {
    return dispatch => {
        Posts.on('value', snapshot => {
            dispatch({
                type: FETCH_POSTS,
                payload: snapshot.val() // json representation of whatever was loaded by fb
            });
        });
    };
}

export function createPost(post){
    return dispatch => Posts.push(post);
}

export function deletePosts(key){
    return dispatch => Posts.child(key).remove(); // when remove, we get a new 'value'
}
```