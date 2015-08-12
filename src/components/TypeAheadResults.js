import React, { Component, PropTypes } from 'react';

class TypeAheadResults extends Component {
  static propTypes = { posts: PropTypes.array };
  static defaultProps = { posts: [] };

  render() {
    return (
      <ol>
        {this.props.posts.map((post) => {
          return (
            <li key={post.ID}>{post.title}</li>
          );
        })}
      </ol>
    );

  }
}

export default TypeAheadResults;
