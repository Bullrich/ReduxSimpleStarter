# Logicless Components with Reselect

[Lesson](https://www.udemy.com/react-redux/learn/v4/t/lecture/5691842?start=0)

**Reselect** is used to generate a new component using values from already created components

```bash
npm install --save reselect
```

### selected_posts.js
```js
import {createSelector} from 'reselect';

// Create select functions to pick off the pirces of state we care
// about for this calculation
const postsSelector = state => state.posts
const selectedPostsSelector = state => state.selectedPostIds

const getPosts = (posts, selectedPostIds) => {
    const selectedPosts = _.filter(
        posts,
        post => _.contains(selectedPostIds, post.id)
    );
    
    return selectedPosts;
};

export default createSelector(
    postsSelector, // pick of a piece of state
    selectedPostsSelector, // pick off a piece of state
    getPosts // last argument is the function that has our select logic
);
```

### components/selected_posts_list.js
```js
import React from 'react';
import { connect } from 'react-redux';
import SelectedPostsSelector from 'selectors/selected_posts';
// SelectedPostsSelector is the class defined above

const SelectedPostList = (props) => {
  return (
    <ul className="list-group">
      {
        props.posts.map(post => {
          return <li className="list-group-item"
            key={post.id}>{post.title}</li>
        });
      }
    </ul>
  );
};

const mapStateToProps = state => {
  return {
    posts: SelectedPostsSelector(state)
  };
};
```

### app.js
```js
import React, { Component } from 'react';

import Posts from 'components/posts_list';
import SelectedPostsList from 'components/selected_posts_list';

export default () => {
  return (
    <div>
      <h4>Selected Posts</h4>
      <SelectedPostsList/>
      <hr />
      <h4>All posts</h4>
      <Posts />
    </div>
  );
}

```