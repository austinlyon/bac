import React from 'react';

const Stats = props => (
  <div id="stats">
    <table>
      <tr>
        <td>Sex:</td>
        <td>{props.sex}</td>
      </tr>
      <tr>
        <td>Weight:</td>
        <td>{props.weight}</td>
      </tr>
    </table>
  </div>
);
Stats.propTypes = {
  sex: React.PropTypes.string,
  weight: React.PropTypes.number,
};
Stats.defaultProps = {
  sex: 'Male',
  weight: 175,
};

export default Stats;
