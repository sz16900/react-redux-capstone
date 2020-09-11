import React from 'react';
import { connect } from 'react-redux';
import { fetchPairings } from '../redux';
import PropTypes from 'prop-types';

function Filter({ fetchPairings }) {
  return (
    <div className="flex flex-col border-black border-b-2 p-4">
      <div className="flex self-center">
        <span className="text-xl md:text-4xl ">Beer + </span>
        <form className="self-center">
          <input
            class="appearance-none border-b rounded w-full text-center text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Pizza"
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                fetchPairings(e.target.value);
              } else {
                fetchPairings(e.target.value);
              }
            }}
          ></input>
        </form>
      </div>
    </div>
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

Filter.propTypes = {
  fetchData: PropTypes.func,
  productData: PropTypes.object,
};

Filter.defaultProps = {
  fetchData: () => {},
  fetchPairings: () => {},
  productData: {},
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
