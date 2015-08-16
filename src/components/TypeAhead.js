import React, { findDOMNode, Component, PropTypes } from 'react';
import TypeAheadResults from './TypeAheadResults';

class TypeAhead extends Component {
  static defaultProps = { results: [] };
  static propTypes = {
    results: PropTypes.array,
    fetchResults: PropTypes.func.isRequired
  };

  constructor() {
    super();
  }

  componentDidMount() {
    findDOMNode(this.refs.searchTermInput).focus();
  }

  triggerSearch = (e) => {
    this.props.fetchResults(e.target.value);
  }

  render() {
    return (
      <div>
        <form>
          <input
              type="text"
              placeholder="Search..."
              ref="searchTermInput"
              onChange={this.triggerSearch}
          />
        </form>
        <TypeAheadResults posts={this.props.results} />
      </div>
    );
  }
}

export default TypeAhead;
