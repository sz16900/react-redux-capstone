import React from 'react';
import { connect } from 'react-redux';
import { fetchPairings } from '../redux';
import PropTypes from 'prop-types';

function Home({ fetchPairings }) {
  return (
    <form>
      <input
        className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="username"
        type="text"
        placeholder="Food Pairings"
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
          } else {
            fetchPairings(e.target.value);
          }
        }}
      ></input>
    </form>
  );
}

const mapStateToProps = (state) => {
  return {
    productData: state.product,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPairings: (params) => dispatch(fetchPairings(params)),
  };
};

Home.propTypes = {
  fetchData: PropTypes.func,
  productData: PropTypes.object,
};

Home.defaultProps = {
  fetchData: () => {},
  fetchPairings: () => {},
  productData: {},
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
