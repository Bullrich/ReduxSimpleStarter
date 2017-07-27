# Best way to store redux data

Object > Array

## Object-Based Storage
```js
state === {
    posts: {
        34: {post},
        52: {post},
        101: {post},
        184: {post}
    }
}
```

### Advantages

##### Array
```js
const postIdToFind = 34;
state.posts.find(post =>
    post.id === postIdToFind);
```
##### Object
```js
const postIdToFind = 34;
state.posts[postIdToFind];
```

#### Another example

##### Array
```js
const newPost = {id:34};
newState = state.posts.filter(post =>
    post.id !== id);
return [...newState, newPost];
```
##### Object
```js
const newPost = {id:34};
return {...state, [newPost.id]: newPost};
```

#### Deleting a record
##### Array
```js
const postIdToDelete = 34;
return state.posts.filter(post =>
    post.id !== postIdToDelete
);
```

##### Object
```js
const postIdToDelete = 34;
return _.omit(state, postIdToDelete);
```