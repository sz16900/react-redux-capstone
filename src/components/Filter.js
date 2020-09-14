import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPairings } from '../redux';

function Filter({ fetchPairings }) {
  return (
    <div className="flex flex-col border-black border-b-2 p-4">
      <div className="flex self-center">
        <span className="text-xl md:text-4xl ">Beer + </span>
        <form className="self-center">
          <input
            className="appearance-none border-b rounded w-full text-center text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Your Favorite Food"
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                fetchPairings(e.target.value);
              }
            }}
            onChange={(e) => {
              fetchPairings(e.target.value);
            }}
          />
        </form>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  productData: state.product,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPairings: (params) => dispatch(fetchPairings(params)),
});

Filter.propTypes = {
  fetchPairings: PropTypes.func,
};

Filter.defaultProps = {
  fetchPairings: () => {},
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
