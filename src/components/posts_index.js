import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from "../actions/index";

class PostsIndex extends Component {
    componentDidMount() {
        // the function is called here!
        this.props.fetchPosts();
    }

    renderPosts() {
        // this.props.posts DOESN'T have array functionality. It is a object. _ will help here.
        return _.map(this.props.posts, post => {
            return (
                <li className="list-group-item" key={post.id}>
                    {post.title}
                </li>
            );
        });
    }

    render() {
        return (
            <div>
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {posts: state.posts};
}

export default connect(mapStateToProps, {fetchPosts: fetchPosts})(PostsIndex); // we pass the action creator where is fetchPosts