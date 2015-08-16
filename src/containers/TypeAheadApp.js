import React, { Component } from 'react';
import TypeAhead from '../components/TypeAhead';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/TypeAhead';

@connect((state) => {
  return {
    results: state.results
  }
})
class TypeAheadApp extends Component {
  render() {
    const actions = bindActionCreators(actionCreators, this.props.dispatch);
    return (
      <TypeAhead fetchResults={actions.fetchResults} results={this.props.results} />
    );
  }
}

export default TypeAheadApp;
