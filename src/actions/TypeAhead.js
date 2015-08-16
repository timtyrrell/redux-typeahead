import axios from 'axios';
import * as types from '../constants/ActionTypes';

export function updateResults(results) {
  return {
    type: types.UPDATE_RESULTS,
    results
  };
}

export function fetchResults(searchTerm) {
  const apiUrl = "https://public-api.wordpress.com/rest/v1/sites/en.blog.wordpress.com/posts/?number=10"
  return dispatch => {
    return axios.get(apiUrl, { params: { search: searchTerm } })
                .then(response => {
                  dispatch(updateResults(response.data.posts))
                });
  }
}
