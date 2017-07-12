import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { incrementCount, asyncIncrementCount } from '../actions/counterActions';
import { getCountValue, getIsLoading } from '../reducers/count';

export const Counter = ({
  value,
  incrementCount,
  asyncIncrementCount,
  isLoading
}) =>
  <div>
    <p className="counter-value">
      {value}
    </p>
    <button className="increment-button" onClick={incrementCount}>
      Increment
    </button>
    <button
      className="async-increment-button"
      onClick={asyncIncrementCount}
      disabled={isLoading}
    >
      {isLoading ? 'Loading...' : 'Async Increment'}
    </button>
  </div>;

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  incrementCount: PropTypes.func.isRequired,
  asyncIncrementCount: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  value: getCountValue(state),
  isLoading: getIsLoading(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      incrementCount,
      asyncIncrementCount
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
